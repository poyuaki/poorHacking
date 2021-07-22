<?php

$userAgent = $_SERVER['HTTP_USER_AGENT'];
$j = preg_match('/iphone|ipod|ipad|android/ui', $userAgent) != 0;

$jsonArray["isPhone"] = $j;


header('Content-Type: application/json');

echo json_encode($jsonArray);

?>