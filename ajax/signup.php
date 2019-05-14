<?php
include '../connection/db.php';
$a = "cristian";

function check_Email()
{
   global $db;
   if (isset($_POST['emailReg'])) {
      $email = $_POST['emailReg'];
      $sql_e = "SELECT * FROM usuarios correo email='$email'";
      $res_e = mysqli_query($db, $sql_e);
      if (!$db || mysqli_num_rows($res_e) > 0) {
         echo json_encode(array("success" => true, "msg" => "OK"));
      } else {
         echo json_encode(array("success" => false, "msg" => "Este correo ya se encuentra registrado"));
      }
   } else {
      echo json_encode(array("success" => false, "msg" => "No hay data"));
   }
}
check_Email();
