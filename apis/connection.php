<?php

$host = "localhost";
$username  = "root";
$passwd = null;
$dbname = "twitterdb";

$mysqli = new mysqli($host,$username, $passwd, $dbname);

// Check connection
if ($mysqli -> connect_errno) {
    die("Connection failed: ");
  exit();
}
?>