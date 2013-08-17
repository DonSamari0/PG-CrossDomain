<?php
	header('Access-Control-Allow-Origin: *');
	$respuesta = $_GET['callback'];
	$data = array ('usuario'=>$_GET["log-user"],'contra'=>$_GET["log-pass"]);
	echo $respuesta."(".json_encode($data).")";
?>