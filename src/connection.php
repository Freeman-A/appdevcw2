<?php 
header('Access-Control-Allow-Origin: *'); // Allow requests from any origin
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow the specified HTTP methods
header('Access-Control-Allow-Headers: Content-Type'); // Allow the specified headers
header('Content-Type: application/json');

class Database {

    private $host = "localhost"; 
    private $user = "root"; #change this to phpmyadmin before deploying to azure vm
    private $password = ""; #change this to AppDev@2021 before deploying
    private $db = "carinsurance"; 

    public function getConnection() {
        $conn = new mysqli($this->host, $this->user, $this->password, $this->db);
        if($conn->connect_error){
            die("Error failed to connect to MySQL: " . $conn->connect_error);
        }
        else {
            return $conn; 
        }
    }


}
?>