<?php 

    include "connection.php";
    
    $db = new Database();
    $connection = $db->getConnection(); 


    $query = "SELECT * FROM records"; 
    $result = mysqli_query($connection, $query); 

if (!$result) {
    $response = array (
        'status' => 'error',
        'message' => 'Query failed: ' . mysqli_error($connect)
    );
    
    die("Query failed: " . mysqli_error($connect));
}
    $json_array = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $json_array[] = $row;
    }
    $response = array(
        'status' => 'success',
        'data' => $json_array
    );

echo json_encode($response); 
    // $claimant['ID'] = $row['ID'];
    // $claimant['KIDSDRIV'] = $row['KIDSDRIV'];
    // $claimant['BIRTH'] = $row['BIRTH'];
    // $claimant['AGE'] = $row['AGE'];
    // $claimant['HOMEKIDS'] = $row['HOMEKIDS'];
    // $claimant['YOJ'] = $row['YOJ'];
    // $claimant['INCOME'] = $row['INCOME'];
    // $claimant['PARENT1'] = $row['PARENT1'];
    // $claimant['MSTATUS'] = $row['MSTATUS'];
    // $claimant['GENDER'] = $row['GENDER'];
    // $claimant['EDUCATION'] = $row['EDUCATION'];
    // $claimant['OCCUPATION'] = $row['OCCUPATION'];
    // $claimant['TRAVTIME'] = $row['TRAVTIME'];
    // $claimant['CAR_USE'] = $row['CAR_USE'];
    // $claimant['BLUEBOOK'] = $row['BLUEBOOK'];
    // $claimant['TIF'] = $row['TIF'];
    // $claimant['CAR_TYPE'] = $row['CAR_TYPE'];
    // $claimant['RED_CAR'] = $row['RED_CAR'];
    // $claimant['OLDCLAIM'] = $row['OLDCLAIM'];
    // $claimant['CLM_FREQ'] = $row['CLM_FREQ'];
    // $claimant['REVOKED'] = $row['REVOKED'];
    // $claimant['MVR_PTS'] = $row['MVR_PTS'];
    // $claimant['CLM_AMT'] = $row['CLM_AMT'];
    // $claimant['CAR_AGE'] = $row['CAR_AGE'];
    // $claimant['CLAIM_FLAG'] = $row['CLAIM_FLAG'];
    // $claimant['URBANICITY'] = $row['URBANICITY'];


?>