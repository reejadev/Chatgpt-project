<?php

$data = array();

for ($i = 0; $i < 10; $i++) {
	$data[] = rand(0, 100);
}

header('Content-Type: application/json');
echo json_encode($data);

?>
