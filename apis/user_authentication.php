<?php

    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");

    include ("connection.php");

    $username = $_POST['username'];
    $password = hash('sha256', $_POST['password']);
    $email = $_POST['email'];
    // $dob = date('y-m-d', strtotime($_POST['dob']));

    $stmt = $mysqli -> prepare ("SELECT `users`.`username` , users.`email`, users.password
    FROM   `users` WHERE (users.username = (?) AND (users.email = (?) AND (users.passsword = (?)) );
    VALUES (?, ?, ?);");
    $stmt -> bind_param("sss", $username , $email);
    $stmt -> execute();

    $stmt -> close();
    $mysqli -> close();
    $response['status'] = 'authorized';

    echo json_encode($response);

?>
    