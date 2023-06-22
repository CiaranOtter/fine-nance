<?php
	header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header("Access-Control-Allow-Headers: *");

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);

	$servername = "localhost";
	$username = "root";
	$password = "!dKZ#10@3kc*L8w6i#";
	$db = "fuel_tracker";
// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$post = json_decode(file_get_contents('php://input'), true);

?>
