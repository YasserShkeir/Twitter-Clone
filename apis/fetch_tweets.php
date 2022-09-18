<?php

    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");

    include ("connection.php");

    $username = $_POST['username'];

    // $dob = date('y-m-d', strtotime($_POST['dob']));

    $stmt = $mysqli -> prepare ("SELECT tweets.content, tweets.likes
    FROM tweets
    INNER JOIN followed_users
    ON tweets.users_username = followed_users.users_username
    WHERE (`folllowed`.users_username = (?));");
    $stmt -> bind_param("s",$username );
    $stmt -> execute();

    $result = $stmt -> get_result();

    echo json_encode($result);
    $stmt -> close();
    $mysqli -> close()l;

?>
    