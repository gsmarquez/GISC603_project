import pandas as pd
import os, csv
#set directory
directory = os.path.dirname(os.path.realpath(__file__))
#set variables
gtfs_trips= str(directory)+ '\\gtfs\\trips.txt'
gtfs_stop_times = str(directory)+ '\\gtfs\\stop_times.txt'
gtfs_stops = str(directory)+ '\\gtfs\\stops.txt'
selected_trips_out = str(directory)+ "\\csv\\selected_trips.csv"
count_by_route_out = str(directory) + "\\csv\\count_by_route.csv"
count_by_category_out = str(directory) + "\\csv\\category_data.csv"
count_by_hour_out_temp = str(directory) + "\\csv\\count_by_hour_temp.csv"
count_by_hour_out = str(directory) + "\\csv\\count_by_hour.csv"
count_by_hour_geojson = str(directory) +"\\count_by_hour.geojson"
service_schedule = 'FEB19-Weekday-71-FEB19-1111100-'
#define gtfs text files
trips_txt = pd.read_csv(gtfs_trips)
stop_times_txt = pd.read_csv(gtfs_stop_times)
stops_txt = pd.read_csv(gtfs_stops)
#add hour column to stop_times file
stop_times_txt['hour'] = stop_times_txt['arrival_time'].str[:2]
stop_times_txt['hour'].replace(regex=True,inplace=True,to_replace=r':',value=r'')
stop_times_txt['hour'] = 'hr_' + stop_times_txt['hour'].str[:2]
#merge stop times and trips on trip_id
merged_df1= pd.merge(stop_times_txt,trips_txt,on='trip_id')
merged_df = pd.merge(merged_df1,stops_txt, on = 'stop_id')
#select trips based on selected schedule and export to csv
selected_trips = merged_df.loc[merged_df['service_id'] == service_schedule]
selected_trips.to_csv(selected_trips_out)
trip_count = selected_trips['trip_id'].nunique()
print str(trip_count) + ' trips selected for schedule: ' + str(service_schedule)
#generate pivot table to count trips by stop and route, by hour
count_by_route = selected_trips.pivot_table(index=['route_id','hour'], values = 'trip_id', aggfunc=pd.Series.nunique)
count_by_route.rename(columns={'trip_id' : 'trip_count'},
                 inplace=True)
count_by_route.to_csv(count_by_route_out)
print 'count by route exported to: ' + str(count_by_route_out)
#generate pivot table to count trips by stop, by hour
count_by_hour_temp = selected_trips.pivot_table(index=['stop_id','stop_lat', 'stop_lon','hour'], values = 'trip_id', aggfunc='count')
count_by_hour_temp.rename(columns={'trip_id' : 'trip_count'},
                 inplace=True)
count_by_hour_temp.to_csv(count_by_hour_out_temp)
print 'count by hour temp file exported to: ' + str(count_by_hour_out_temp)
df= pd.read_csv(count_by_hour_out_temp)
df.to_csv(count_by_hour_out, index = False)
#add categories column according to count of trips
category = pd.Series([])
for i in range(len(df)):
    if df["trip_count"][i]==1:
        category[i]="1"
    elif df["trip_count"][i]>=2 and df["trip_count"][i] <=3:
        category[i]="2 to 3"
    elif df["trip_count"][i]>=4 and df["trip_count"][i] <=5:
        category[i]="4 to 5"
    elif df["trip_count"][i]>=6 and df["trip_count"][i] <=7:
        category[i]="6 to 7"
    elif df["trip_count"][i]>=8:
        category[i]="8+"
df.insert(5,'category', category)
df.head()
count_by_category = df.pivot_table(index='category', columns = 'hour', values = 'stop_id', aggfunc=pd.Series.nunique)
count_by_category.rename(columns ={'stop_id' : 'stop_count'},inplace=True)
count_by_category.to_csv(count_by_category_out)
#create geojson
#read temp csv and re-export so that columns that were set to index are now normal columns
df= pd.read_csv(count_by_hour_out_temp)
df.to_csv(count_by_hour_out, index = False)
rawData = csv.reader(open(count_by_hour_out, 'rb'), dialect = 'excel')
# the head of the geojson file
output = \
    ''' \
{"type" : "FeatureCollection",
    "name": "StopsByHour",
    "crs": 
    {"type": "name", 
    "properties": 
    {"name": "urn:ogc:def:crs:OGC:1.3:CRS84" }},
    "features" : [
    '''
# the template. where data from the csv will be formatted to geojson
template = \
    ''' \
   {"type": "Feature",
    "properties": {
        "stop_id": "%s",
        "hour": "%s",
        "trip_count": "%s"},
    "geometry": {
        "type": "Point",
        "coordinates": [ %f , %f ]}},
    '''
#IN GEOJSON, MAKE SURE TO DELETE LAST , FROM LAST FEATURE
#loop through csv, skip first row
iter = 0
for row in rawData:
    iter +=1
    if iter >=2:
        lat = float(row[1])
        lon = float(row[2])
        stop_id = row[0]
        hour = row[3]
        trip_count = row[4]
        #merge head, template, and values
        output += template % (stop_id, hour,trip_count,lon,lat)
#add last part of geojson
output += \
    '''\
    ]
}
        '''
#write to a geojson file
outFileHandle = open(count_by_hour_geojson, "w")
outFileHandle.write(output)
outFileHandle.close()    
print "Geojson created in: " + count_by_hour_geojson                        
        
