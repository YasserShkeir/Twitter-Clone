<?php

    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");

    include ("connection.php");

    $username = $_POST['username'];
    $followed_user = $_POST['followed_username']
    // $dob = date('y-m-d', strtotime($_POST['dob']));

    $stmt = $mysqli -> prepare ("INSERT INTO `followed` (`username`, `followed_user`) 
    VALUES ( ?, ?);");
    $stmt -> bind_param("ss",$username, $followed_user);
    $stmt -> execute();
    $stmt -> close();
    $mysqli -> close();


    $response["status"] = "sucesss";
    echo json_encode($response);