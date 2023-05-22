<?php 


declare(strict_types=1); 


spl_autoload_register(function ($class) {
    #auto require classes
    require __DIR__ . "/api/$class.php"; 
}); 

#get the exception handler to the class 
set_exception_handler("ErrorHandler::handleException"); 

#set the content type and other header options
header('Access-Control-Allow-Headers: Content-Type');
header("Content-type: application/json; charset-UTF-8");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$id = $_GET['ID'] ?? null; 

#establish new database object
$database = new Database(); 

#create an gateway object to pass through to the controller
$gateway = new Gateway($database);

#create new instance of the controller class to process request
$controller = new Controller($gateway); 

$controller->processReq($_SERVER["REQUEST_METHOD"], $id); 









?>