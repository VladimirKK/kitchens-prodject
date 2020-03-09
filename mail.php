<?php 

$recepient = "vov.cazackow@yandex.ru";
$sitename = "Студия дизайна 2";


$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$consent = trim($_POST["consent"]);
$message = "Имя: $name \n Телефон: $phone \n Подтверждение согласия: $consent";

$pagetitle = "Новая заявка с сайта \"designtwo\"";

mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=utf-8\r\n");


?>