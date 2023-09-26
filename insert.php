

<!DOCTYPE html>

<html>
    <head>
        <title>InsertDone</title>
        <link rel="stylesheet" href="insertPhpStyle.css">
    </head>

        <body>

            <header>
                <nav>
                    <a href="index.html">Buildings</a>
                    <a href="insertBuilding.html">InsertBuildings</a>
                    <a href="autors.html">Autors</a>
                </nav>
            </header>

                <div class="header-image">
                    <h1>INSERT BUILDINGS</h1>
                </div>

                        <div class = "errorsContainer">
                                <p>Register done!</p>
                        </div>


                        <?php

                            $servername = "localhost";
                            $database = "ucsd";
                            $usename = "root";
                            $password = "";


                                $nombre = $_POST['name'];
                                $descripcion = $_POST['description'];
                                $geo = $_POST['geo_coordinates'];
                                $transito = $_POST['transit'];
                                $locacion = $_POST['location'];


                                    $conexion = mysqli_connect($servername,$usename,$password,$database);
                                    $sql = "INSERT INTO buildings (name, description, geo_coordinates, transit, location) VALUES ('$nombre', '$descripcion', '$geo', '$transito', '$locacion')";

                                        if (mysqli_query($conexion, $sql)) {
                                                 echo ">>"; 
                                                    }

                        ?>


        </body>

</html>


