<?php

    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");

    include ("connection.php");

    $username = $_POST['username'];

    $email = $_POST['email'];
    // $dob = date('y-m-d', strtotime($_POST['dob']));

    $stmt = $mysqli -> prepare ("SELECT `users`.`username` , `email` FROM   `users` () WHERE (users.username = (?) OR (users.email = (?) );
    VALUES ( ?, ?);");
    $stmt -> bind_param("ss", $username , $email);
    $stmt -> execute();
    $result = $stmt -> get_result();
    $stmt -> close();
    $mysqli -> close();

    echo json_encode($result);

?>
    