<?php 

class Gateway {
    #class to implement core functionality of RESTful API 

    private mysqli $conn; 

    public function __construct(Database $database)
    {
        $this->conn = $database->getConnection(); 
    }

    public function getAll(): array 
    {
    #gather all data in the records table 
        $sql = "SELECT * FROM records";
        $stmt = $this->conn->execute_query($sql); 

        $data = []; 
        while($row = $stmt->fetch_assoc()){
            $data[] = $row; 
        }
        return $data; 

    }

    public function create(array $data){
        $sql = "INSERT INTO records (ID,KIDSDRIV,BIRTH,AGE,HOMEKIDS,YOJ,INCOME,PARENT1,HOME_VAL,MSTATUS,GENDER,EDUCATION,OCCUPATION,TRAVTIME,CAR_USE,BLUEBOOK,TIF,CAR_TYPE,RED_CAR,OLDCLAIM,CLM_FREQ,REVOKED,MVR_PTS,CLM_AMT,CAR_AGE,CLAIM_FLAG,URBANICITY) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $this->conn->prepare($sql);
        
        # bind the values to variables to prevent SQL injection
        $stmt->bind_param("iisiiiisissssisiissiisiiiis", 
        $data["ID"], 
        $data["KIDSDRIV"],
        $data["BIRTH"], 
        $data["AGE"], 
        $data["HOMEKIDS"], 
        $data["YOJ"], 
        $data["INCOME"], 
        $data["PARENT1"], 
        $data["HOME_VAL"], 
        $data["MSTATUS"], 
        $data["GENDER"], 
        $data["EDUCATION"], 
        $data["OCCUPATION"], 
        $data["TRAVTIME"], 
        $data["CAR_USE"], 
        $data["BLUEBOOK"], 
        $data["TIF"], 
        $data["CAR_TYPE"], 
        $data["RED_CAR"], 
        $data["OLDCLAIM"], 
        $data["CLM_FREQ"],
        $data["REVOKED"], 
        $data["MVR_PTS"],
        $data["CLM_AMT"],
        $data["CAR_AGE"],
        $data["CLAIM_FLAG"],
        $data["URBANICITY"]); 
        
        $stmt->execute();
        return $data["ID"];
    }
}







?>