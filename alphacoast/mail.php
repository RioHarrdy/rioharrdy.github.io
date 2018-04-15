<?php

$recepient = "vladislavdudar1995@gmail.com";
$sitename = "Alpha Costa";

$phone = trim($_POST["phone"]);
$time = trim($_POST["time"]);
$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$subject = trim($_POST["subject"]);
$textarea = trim($_POST["textarea"]);

$message = "
<html>
<head>
 <title>Новая заявка с сайта " + $sitename +" </title>
</head>
<body>
" . "   " .
	($phone ? "Телефон: " . $phone . "<br/>" : '')  .
	($time ? "Время: " . $time . "<br/>" : '') .
	($name ? "Имя: " . $name . "<br/>" : '') .
	($mail ? "E-mail: " . $mail . "<br/>" : '') .
	($subject ? "Тема: " . $subject . "<br/>" : '') .
	($textarea ? "Сообщение: " . $textarea . "<br/>" : '');


$pagetitle = "Новая заявка с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


