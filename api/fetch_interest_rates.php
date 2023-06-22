<?php

include('conf.php');

$sql = "SELECT * FROM interest_rates";

$output = array("success" => false, "data" => array());

if ($res = $conn->query($sql)) {
    $output['success'] = true;
    while ($row = $res->fetch_assoc()) {
        $output['data'][] = $row;
    }
} 

echo json_encode($output);

?>