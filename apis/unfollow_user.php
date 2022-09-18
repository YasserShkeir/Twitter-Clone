
 Customers ;
<?php

    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");

    include ("connection.php");

    $username = $_POST['username'];
    $followed_user = $_POST['followed_username']
    // $dob = date('y-m-d', strtotime($_POST['dob']));

    $stmt = $mysqli -> prepare ("DELETE FROM `followed` 
                                WHERE (followed.users_username = (?)
                                AND  followed.followed_username = (?));");
    $stmt -> bind_param("ss",$username, $followed_user);
    $stmt -> execute();

    $response["status"] = "sucesss";
    echo json_encode($response);
    
    $stmt -> close();
    $mysqli -> close();
    
?>


    