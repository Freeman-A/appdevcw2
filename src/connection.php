<?php 

$connect = mysqli_connect("localhost", "root", "", "carinsurance"); 
$query = "SELECT * FROM records"; 
$result = mysqli_query($connect, $query); 

if (!$result) {
    die("Query failed: " . mysqli_error($connect));
}

$json_arry = array(); 
while($row = mysqli_fetch_assoc($result)){
    $json_array[]=$row; 
}

echo json_encode($json_array); 

?>