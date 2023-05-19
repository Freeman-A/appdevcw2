<?php 

class Gateway {

    private mysqli $conn; 

    public function __construct(Database $database)
    {
        $this->conn = $database->getConnection(); 
    }

    public function getAll(): array 
    {
        $sql = "SELECT * FROM records";
        $stmt = $this->conn->execute_query($sql); 

        $data = []; 
        while($row = $stmt->fetch_assoc()){
            $data[] = $row; 
        }
        return $data; 

    }

}







?>