<?php

    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");
    include("connection.php");


    if(isset($_GET["username"]))
    {
        $username = $_GET["username"];
    }
    else {
        die("username is missing");
    }
    if(isset($_GET["password"])){
        $password = $_GET["password"];
    }
    else {
        die("username is missing");
    }

    $stmt = $mysqli -> prepare ("INSERT INTO `users` ( `username`, `first_name`, `last_name`, `password`, `email`, `phone_number`, `created_at`, `updated_at`, `DOB`, `gender`, `location`, `last_login`, `verified`)
                                    VALUES ( ?, NULL, NULL, ?, NULL, NULL, current_timestamp(), NULL, NULL, NULL, NULL, NULL, NULL)");
    $stmt -> bind_param("ss", $username, $password );
    $stmt -> execute();

?>
    