<?php

class Controller {
    #controller class used to change response content 

    
    public function __construct(private Gateway $gateway)
    {

    }


    public function processReq(string $method, ?string $id): void 
    {
        #handle the URL here pass in URL and then change the type of function that is run based on the URL and the METHOD 

        if ($id != null & $method != "POST") {
            $this->processResourceReq($method, $id); 
        }   else {
            $this->processCollectionReq($method);
        } 

            
    }

    private function processResourceReq(string $method, string $id): void 
    {

        $data = $this->gateway->get($id); 
        

        switch ($method){
            case "GET": 
                echo json_encode($data); 
                break; 
            case "PUT": 
                $data = $_GET;
                $requestData = json_decode(file_get_contents('php://input'), true); 

                $id = $this->gateway->update($data, $requestData); 

                break;
            case "DELETE": 

                $rows = $this->gateway->delete($id); 

                echo json_encode([
                    "message" => "Record at $id deleted",
                    "rows" => $rows]);
                    break;
        }
    }



    private function processCollectionReq(string $method): void 
    {

        switch ($method) {
            case "GET": 
                echo json_encode($this->gateway->getAll());
                break;
                
            case "POST": 
                // Use $data to perform the necessary operations
                $data = $_GET;

                $id = $this->gateway->create($data); 

                if ($id) {
                    http_response_code(201); 
                    echo json_encode([  
                        "message" => "record created", 
                        "id" => $id 
                    ]); 
                }
    
                break;  
            }       

    }
}

?> 