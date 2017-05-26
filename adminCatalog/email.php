<?php
	$_POST = json_decode(file_get_contents('php://input'),true);
	$msg = $_POST["msg"];
	// use wordwrap() if lines are longer than 70 characters
	if (strlen($msg) > 70) $msg = wordwrap($msg,70);
	// send email
	mail("rechi.sosa09@gmail.com","Comentarios de blue-bubblegum",$msg);
	mail("mdoming@uady.mx","Comentarios de blue-bubblegum",$msg);
?>