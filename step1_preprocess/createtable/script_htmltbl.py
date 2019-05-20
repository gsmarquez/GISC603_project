from prettytable import PrettyTable
import os
#set directory
directory = os.path.dirname(os.path.realpath(__file__))
category_csv = str(directory)+ "\\csv\\category_data.csv"
html_path = str(directory)+'\\table.html'
#script
csv_file = open(category_csv,'r')
csv_file = csv_file.readlines()
#assign element to line and split
line_1 = csv_file[0]
print line_1
line_1 = line_1.split(',')
line_2 = csv_file[1]
line_2 = line_2.split(',')
line_3 = csv_file[2]
line_3 = line_3.split(',')
line_4 = csv_file[3]
line_4 = line_4.split(',')
line_5 = csv_file[4]
line_5 = line_5.split(',')
line_6 = csv_file[5]
line_6 = line_6.split(',')
x = PrettyTable([line_1[0],line_2[0],line_3[0],line_4[0],line_5[0],line_6[0]])
list3 = line_3[2:5]
for a in range(1,len(line_1)):
    x.add_row([line_1[a],int(float(line_2[a])),line_3[a],line_4[a],line_5[a],line_6[a]])
html_code = x.get_html_string()
html_file = open(html_path,'w')
html_file = html_file.write(html_code)
                
