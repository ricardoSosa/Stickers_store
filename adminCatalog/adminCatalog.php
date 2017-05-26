<?php
	include '../adminDB/adminDB.php';

	$adminDB = new AdminDB();
	$request_type = $_SERVER['REQUEST_METHOD'];

	switch( $request_type ) {
		case 'GET':
			if (isset($_GET['category'])) {
				$category = $_GET['category'];
				switch($category){

					case 'all':
						$products = $adminDB->obtener_informacion('products', null);
						break;

					case 'technology':
						$category = [
							'category' => 'technology'
						];
						$products = $adminDB->obtener_informacion('products', $category);
						break;

					case 'comics-manga':
						$category = [
							'category' => 'comics-manga'
						];
						$products = $adminDB->obtener_informacion('products', $category);
						break;

					case 'movies':
						$category = [
							'category' => 'movies'
						];
						$products = $adminDB->obtener_informacion('products', $category);
						break;

					case 'others':
						$category = [
							'category' => 'others'
						];
						$products = $adminDB->obtener_informacion('products', $category);
						break;
				}
			} else {
				if(isset($_GET['id'])){
					$id = [
						'id' => $_GET['id']
					];
					$product = $adminDB->obtener_informacion('products', $id);
				} else {
					$id = [
						'email' => $_GET['email']
					];
					$product = $adminDB->obtener_informacion('users', $id);
				}
			}
			break;

		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'),true);
			if ($_POST['tipo'] == 'insertar'){
				$title = $_POST['title'];
				$description = $_POST['description'];
				$category = $_POST['category'];
				$price = $_POST['price'];
				$units = $_POST['units'];
				$imageUrl = $_POST['imageUrl'];
				$data = [
					'title' => $title,
					'description' => $description,
					'category' => $category,
					'price' => $price,
					'imageUrl' => $imageUrl,
					'units' => $units
				];
				$adminDB->insertar('products', $data);

			} else if ($_POST['tipo'] == 'modificar'){
				$title = $_POST['title'];
				$description = $_POST['description'];
				$category = $_POST['category'];
				$price = $_POST['price'];
				$units = $_POST['units'];
				$id = $_POST['id'];
				$data = [
					'title' => $title,
					'description' => $description,
					'category' => $category,
					'price' => $price,
					'units' => $units,
					'id' => $id
				];
				$adminDB->modificar('products', $data, 5);
			} else if ($_POST['tipo'] == 'eliminar'){
				$id = $_POST['id'];
				$data = [
					'id' => $id
				];
				$adminDB->eliminar('products', $data);
			} else if ($_POST['tipo'] == 'enviar_mail'){
				$msg = $_POST['msg'];
			}
			break;
	}

?>