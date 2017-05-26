<?php

	include '../adminDB/adminDB.php';

	$adminDB = new AdminDB();
	$_POST = json_decode(file_get_contents('php://input'),true);

	foreach ($_POST as $id => $value) {
		$obid["id"] = $id;
		$actual_units = $adminDB->obtener_info("products", $obid);
		$new_units = $actual_units[0]["units"] - $value;
		echo $new_units;
		$datos = [
			"units" => $new_units,
			"id" => $id
		];
		$adminDB->modificar("products", $datos, 1);
	}

?>