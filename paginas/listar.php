<?php
  try {
        $conexion = new PDO("mysql:host=localhost;port=3306;dbname=sourcebd001", "root", "");      
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        $res=$conexion->query('SELECT * FROM user') or die(print($pdo->errorInfo()));
        $data =[];
while($item=$res->fetch(PDO::FETCH_OBJ)){
$data[]=[
'codUs' => $item ->codUs,
'nombreUs' => $item ->nombreUs,
'correoUs' => $item ->correoUs
];
}

echo json_encode($data);

       
      } catch(PDOException $error) {
       echo $error->getMessage();
    die();  
    }
 ?>