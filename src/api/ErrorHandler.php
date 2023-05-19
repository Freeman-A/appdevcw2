<?php 


class ErrorHandler 

{
     public static function handleException(Throwable $exception): void
     #basic error handling returning json response 
     {
        http_response_code(500); 

        echo json_encode ([
            #format the response 
            "code" => $exception->getCode(),
            "message" => $exception->getMessage(), 
            "file" => $exception->getFile(),
            "line" => $exception->getLine()
        ]); 


     }

}

?>