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
        die("password is missing");
    }

?>
    