<?php

    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");

    include ("connection.php");

    $username = $_POST['username'];

    $stmt = $mysqli -> prepare ("SELECT tweets.content, tweets.likes
    FROM tweets
    WHERE (`tweets`.likes_users_username = (?));");
    $stmt -> bind_param("s",$username);
    $stmt -> execute();

    $result = $stmt -> get_result();

    echo json_encode($result);
    $stmt -> close();
    $mysqli -> close();


?>
