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

    public function create(array $data)
    {
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


    public function get(int $id): array | null
    {
        #get record by id 
        $sql = "SELECT * FROM records WHERE ID = ?"; 

        $stmt = $this->conn->prepare($sql); 
        $stmt->bind_param("i", $id); 

        $stmt->execute(); 

        $data = $stmt->get_result();

        if($data->num_rows === 1){
            $data = $data->fetch_assoc(); 
        }
        return $data; 
    }

    public function update(array $current, array $new): int
    {

        $id = $current["ID"]; 

        $sql = "UPDATE records SET 
        KIDSDRIV = ?,
        BIRTH = ?,
        AGE = ?,
        HOMEKIDS = ?,
        YOJ = ?,
        INCOME = ?,
        PARENT1 = ?,
        HOME_VAL = ?,
        MSTATUS = ?,
        GENDER = ?,
        EDUCATION = ?,
        OCCUPATION = ?,
        TRAVTIME = ?,
        CAR_USE = ?,
        BLUEBOOK = ?,
        TIF = ?,
        CAR_TYPE = ?,
        RED_CAR = ?,
        OLDCLAIM = ?,
        CLM_FREQ = ?,
        REVOKED = ?,
        MVR_PTS = ?,
        CLM_AMT = ?,
        CAR_AGE = ?,
        CLAIM_FLAG = ?,
        URBANICITY = ?
      WHERE ID = ?";
      
        $stmt = $this->conn->prepare($sql); 
        $stmt->bind_param("isiissssssssissssssisisiss",
        $new["KIDSDRIV"],
        $new["BIRTH"], 
        $new["AGE"], 
        $new["HOMEKIDS"], 
        $new["YOJ"], 
        $new["INCOME"], 
        $new["PARENT1"], 
        $new["HOME_VAL"], 
        $new["MSTATUS"], 
        $new["GENDER"], 
        $new["EDUCATION"], 
        $new["OCCUPATION"], 
        $new["TRAVTIME"], 
        $new["CAR_USE"], 
        $new["BLUEBOOK"], 
        $new["TIF"], 
        $new["CAR_TYPE"], 
        $new["RED_CAR"], 
        $new["OLDCLAIM"], 
        $new["CLM_FREQ"],
        $new["REVOKED"], 
        $new["MVR_PTS"],
        $new["CLM_AMT"],
        $new["CAR_AGE"],
        $new["CLAIM_FLAG"],
        $new["URBANICITY"], 
        $id); 
        $stmt->execute(); 

        
    return $stmt->num_rows(); 
}

    public function delete(int $id): int {
        $sql = "DELETE FROM records WHERE ID = ?"; 

        $stmt = $this->conn->prepare($sql); 
        $stmt->bind_param("i", $id);

        $stmt->execute(); 

        return $stmt->num_rows(); 
    }

}

?>