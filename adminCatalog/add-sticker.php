<?php
include '../adminDB/adminDB.php';
	//$_POST = json_decode(file_get_contents('php://input'),true);
	print_r($_FILES);
	$target_dir = "../stickersImages/";
	$imageUrl = $target_dir . basename($_FILES["image"]["name"]);
	$uploadOk = 1;
	$imageFileType = pathinfo($imageUrl,PATHINFO_EXTENSION);
	// Check if image file is a actual image or fake image
	if(isset($_POST["submit"])) {
	    $check = getimagesize($_FILES["image"]["tmp_name"]);
	    if($check !== false) {
	        echo "File is an image - " . $check["mime"] . ".";
	        $uploadOk = 1;
	    } else {
	        echo "File is not an image.";
	        $uploadOk = 0;
	    }
	}

	// Check if file already exists
	if (file_exists($imageUrl)) {
	    echo "Sorry, file already exists.";
	    $uploadOk = 0;
	}
	// Check file size
	if ($_FILES["image"]["size"] > 500000) {
	    echo "Sorry, your file is too large.";
	    $uploadOk = 0;
	}
	// Allow certain file formats
	if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
	&& $imageFileType != "gif" ) {
	    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
	    $uploadOk = 0;
	}
	// Check if $uploadOk is set to 0 by an error
	if ($uploadOk == 0) {
	    echo "Sorry, your file was not uploaded.";
	// if everything is ok, try to upload file
	} else {
	    if (move_uploaded_file($_FILES["image"]["tmp_name"], $imageUrl)) {
	        echo "The file ". basename( $_FILES["image"]["name"]). " has been uploaded.";
	    } else {
	        echo "Sorry, there was an error uploading your file.";
	    }
	}

	$title = $_POST['title'];
	$description = $_POST['description'];
	$category = $_POST['category'];
	$price = $_POST['price'];
	$units = $_POST['units'];
	$data = [
		'title' => $title,
		'description' => $description,
		'category' => $category,
		'price' => $price,
		'imageUrl' => $imageUrl,
		'units' => $units
	];

	$adminDB = new AdminDB();
	$adminDB->insertar('products', $data);
?>