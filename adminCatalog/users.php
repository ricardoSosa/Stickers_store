<?php

	include '../adminDB/adminDB.php';

	$adminDB = new AdminDB();
	$request_type = $_SERVER['REQUEST_METHOD'];

	if($request_type == 'GET'){
		$adminDB->obtener_informacion("users", null);
	} else if ($request_type == 'POST'){
		$_POST = json_decode(file_get_contents('php://input'),true);
		$datos = [
			"id" => $_POST["id"]
		];
		$adminDB->eliminar("users", $datos);
	}

?>