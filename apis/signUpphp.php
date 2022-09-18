<?php

    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");

    include ("connection.php");

    $username = $_POST['username'];
    $password = hash("sha256", $_POST['password']);
    $email = $_POST['email'];
    // $dob = date('y-m-d', strtotime($_POST['dob']));

    $stmt = $mysqli -> prepare ("INSERT INTO `users` (`username`, `password`, `email`) 
    VALUES ( ?, ?, ?);");
    $stmt -> bind_param("sss",$username, $password, $email);
    $stmt -> execute();
    $stmt -> close();
    $mysqli -> close();


    $response["status"] = "sucesss";
    echo json_encode($response);

?>
    