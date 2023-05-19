<?php 


declare(strict_types=1); 


spl_autoload_register(function ($class) {
    #auto require classes
    require __DIR__ . "/api/$class.php"; 
}); 

#get the exception handler to the class 
set_exception_handler("ErrorHandler::handleException"); 

#set the content type 
header("Content-type: application/json; charset-UTF-8");

#get parts of the URL
$parts = explode("/", $_SERVER["REQUEST_URI"]); 

#check if the part of the URI is not records
#return 404 if not
if ($parts[3] != "records"){
    http_response_code(404); 
    exit;
}

$id = $parts[4] ?? null; 

#establish new database connection
$database = new Database(); 
$database->getConnection();

#create an gateway object to pass through to the controller
$gateway = new Gateway($database); 

#create new instance of the controller class to process request
$controller = new Controller($gateway); 

$controller->processReq($_SERVER["REQUEST_METHOD"], $id); 









?>