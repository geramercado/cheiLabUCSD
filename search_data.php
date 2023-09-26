<?php 
require_once('database.php');

$search_criteria = $_POST['search_criteria'];


//chain query

$query = "SELECT id_building, name, description, geo_coordinates, transit, location FROM buildings
WHERE name LIKE '%".$search_criteria."%'  OR id_building LIKE '%".$search_criteria."%' OR description LIKE '%".$search_criteria."%' OR location LIKE '%".$search_criteria."%' ";


$buildings = [];

$errors = ['data' => false];

$getBuildings = $conexion -> query($query);

if($getBuildings -> num_rows > 0){

    while($data = $getBuildings -> fetch_assoc()){
        $buildings[] = $data;
    }

    echo json_encode($buildings);

}else{
    echo json_encode($errors);
}