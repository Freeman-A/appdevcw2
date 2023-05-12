<?php 
header('Access-Control-Allow-Origin: *'); // Allow requests from any origin
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow the specified HTTP methods
header('Access-Control-Allow-Headers: Content-Type'); // Allow the specified headers
header('Content-Type: application/json');

$connect = mysqli_connect("localhost", "root", "", "carinsurance") or die("Connection Failed: " . mysqli_connect_error()); 
$query = "SELECT * FROM records"; 
$result = mysqli_query($connect, $query); 

if (!$result) {
    $response = array (
        'status' => 'error',
        'message' => 'Query failed: ' . mysqli_error($connect)
    );
    
    die("Query failed: " . mysqli_error($connect));
}
    $json_array = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $json_array[] = $row;
    }
    $response = array(
        'status' => 'success',
        'data' => $json_array
    );

echo json_encode($response); 


?>