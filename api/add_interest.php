<?php

include('conf.php');

$rate = "";
$min = "";
$max ="";

$sql = "INSERT INTO interest_rates (interest_rate, ";

$sql_values = ")VALUES (";

if (isset($post['rate'])) {
    $rate = $post['rate'];
    $sql_values .= "'$rate',";
} else {
    die;
}

if (isset($post['min'])) {
    $min = $post['min'];
    $sql .= "min,";
    $sql_values .= "'$min',";
}

if (isset($post['max'])) {
    $max = $post['max'];
    $sql .= "max,";
    $sql_values .= "'$max',";
}

$sql = substr($sql, 0, -1) . substr($sql_values, 0, -1) . ")";

if ($res = $conn->query($sql)) {
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false, "message" => $conn->error));
}






?>