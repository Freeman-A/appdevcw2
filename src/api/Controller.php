<?php

class Controller {
    #controller class used to change response content 


    public function __construct(private Gateway $gateway)
    {

    }

    public function processReq(string $method, ?string $id): void 
    {
        $this->processCollectionReq($method); 
         
        // if ($id ) {
        //     $this->processResourceReq($method, $id); 
        // }   else {
        //     $this->processCollectionReq($method);
        // }     
    }


    private function processResourceReq(string $method, string $id): void 
    {

    }

    private function processCollectionReq(string $method): void 
    {

        switch ($method) {
            case "GET": 
                echo json_encode($this->gateway->getAll());
                break;
                
            case "POST": 
                $data = $_GET;
                // Use $data to perform the necessary operations
    
                foreach ($data as $key => $value) {
                    echo "$key: $value\n";
                }
                
                $id = $this->gateway->create($data); 
                
                echo json_encode([
                    "message" => "record created", 
                    "id" => $id 
                ]); 
    
                break;  
            }
            

        }
    }

?> 