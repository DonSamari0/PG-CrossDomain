<?php
	header('Access-Control-Allow-Origin: *');
	$respuesta = $_POST['callback'];
	$data = array ('usuario'=>$_POST["log-user"],'contra'=>$_POST["log-pass"]);
	echo $respuesta."(".json_encode($data).")";
?>