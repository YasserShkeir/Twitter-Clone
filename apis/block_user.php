<?php

    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");

    include ("connection.php");

    $username = $_POST['username'];
    $blocked_user = $_POST['blocked_username']
    // $dob = date('y-m-d', strtotime($_POST['dob']));

    $stmt = $mysqli -> prepare (" INSERT INTO `blocked_users` (`username`, `blocked_user` AND DELETE FROM `followed` 
    WHERE (followed.users_username = (?)
    AND  followed.followed_username = (?));");
    $stmt -> bind_param("ssss",$username, $blocked_user, $username, $blocked_user);
    $stmt -> execute();
    $stmt -> close();
    $mysqli -> close();


    $response["status"] = "sucesss";
    echo json_encode($response);