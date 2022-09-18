<?php

    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");

    include ("connection.php");

    $username = $_POST['username'];
    $password = hash('256', $_POST['password'];
    // $dob = date('y-m-d', strtotime($_POST['dob']));

    $stmt = $mysqli -> prepare ("SELECT tweets.content, tweets.likes
    FROM tweets
    INNER JOIN followed_users
    ON tweets.users_username = followed_users.users_usernam
    WHERE (`folllowed`.users_username = (?)) 
    VALUES ( ?);");
    $stmt -> bind_param("s",$username );
    $stmt -> execute();

    $result = $stmt -> get_result();
    $response["status"] = "sucesss";
    
    echo json_encode($response);
    $stmt -> close();
    $mysqli -> close();


    



?>
    