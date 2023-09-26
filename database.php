
<?php
    $conexion = mysqli_connect('localhost','root','','ucsd');

//check conexion

if($conexion -> connect_error) {
    die("Error to connected: " . $conexion -> connect_error);
}



