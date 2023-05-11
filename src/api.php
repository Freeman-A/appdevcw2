<?php 

    declare(strict_types=1); 
    spl_autoload_register(function ($class) {
        require __DIR__ . "/$class.php"; 
    });

    $parts = explode("/", $_SERVER["REQUEST_URI"]); 

    if ($parts[1] != "api"){
        http_response_code(404); 
        exit;
    }

    $id = $parts[2] ?? null;
    
    $controller = new Controller; 
    $controller->processRequest($_SERVER["REQUEST_METHOD"], $id); 

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