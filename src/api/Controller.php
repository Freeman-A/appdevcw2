<?php

class Controller {
    #controller class used to change response content 


    public function __construct(private Gateway $gateway)
    {

    }

    public function processReq(string $method, ?string $id): void 
    {
         
        if ($id ) {
            $this->processResourceReq($method, $id); 
        }   else {
            $this->processCollectionReq($method);
        }     
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
        }
            

    }


}


?> 