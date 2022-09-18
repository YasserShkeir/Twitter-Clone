<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: *");

include ("connection.php");

$username = $_POST['username'];
$tweet_id = $_POST['tweet_id'];

$stmt = $mysqli -> prepare ("INSERT INTO likes (tweet_id, username ) Values (?, ?);");
$stmt -> bind_param("ss", $tweet_id, $username);
$stmt -> execute();

$response["status"] = "sucess";
echo json_encode($response);

$stmt -> close();
$mysqli -> close();