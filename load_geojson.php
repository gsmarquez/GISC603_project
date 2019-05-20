<?php
# Connect to Postgresql
$dsn = "pgsql:host=aws_endpoint;port=#### dbname=mydb";
$opt = [
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	PDO::ATTR_EMULATE_PREPARES => false];
$conn = new PDO($dsn,"username","password",$opt);
if (!$conn){
	echo 'Database failed to connect';
}
#query data from stops table. chose all records in this case
$results = $conn->query("SELECT *,ST_AsGeoJSON(geom,5) AS geojson FROM stops");
#creates a blank array
$features=[];
foreach ($results as $row) {
	#had extra columns in table for some reason, removed
	unset($row['geom']);
	unset($row['0']);
	unset($row['id']);
	unset($row['1']);
	unset($row['2']);
	unset($row['3']);
	unset($row['4']);
	unset($row['5']);
	unset($row['6']);
	unset($row['7']);
	unset($row['8']);
	unset($row['lat']);
	unset($row['lon']);
	#sets the geometry attributes
	$geometry = $row['geojson']=json_decode($row['geojson']);
	unset($row['geojson']);
	#sets the values to go into the features
	$feature =["type"=>"Feature","geometry"=>$geometry, "properties"=>$row];
	#pushes each feature to the features array
	array_push($features, $feature);
	}
#adds the array to the feature collection
$featureCollection=["type"=>"FeatureCollection","features"=>$features];
echo json_encode($featureCollection)

?>