<?php

function fail(){
   http_response_code(400);
   echo "Error!";
}

function run(){
   if(!empty($_GET["email"]) && !empty($_GET["name"]) && !empty($_GET["message"])){
      $from = htmlspecialchars($_GET["email"]);
      $name = htmlspecialchars($_GET["name"]);
      $msg = htmlspecialchars($_GET["message"]);

      $to      = 'dustin.hoffner@gmail.com'; // contact@form8.info
      $subject = 'Kontaktformular Nachricht form8';
      $message = 'Sie haben eine neue Nachricht von "'.$name.'" erhalten:'."\n\n".
         '==================================================================================='.
         "\n\n".
         $msg;
      $headers = 'From: website@form8.info' . "\r\n" .
          'Reply-To: '.$from.''. "\r\n" .
          'X-Mailer: PHP/' . phpversion();

      mail($to, $subject, $message, $headers);
      echo "Mailed!";
   } else {
      fail();
   }
}
run();
?>
