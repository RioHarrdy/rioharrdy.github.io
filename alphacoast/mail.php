<?php

$recepient = "vladislavdudar1995@gmail.com";
$sitename = "Alpha Costa";

$phone = trim($_POST["phone"]);
$time = trim($_POST["time"]);
$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$subject = trim($_POST["subject"]);
$textarea = trim($_POST["textarea"]);
$phone2 = trim($_POST["phone-2"]);
$email2 = trim($_POST["email"]);
$textarea2 = trim($_POST["text-mess"]);

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
	($textarea ? "Сообщение: " . $textarea . "<br/>" : '') .
	($phone2 ? "Телефон: " . $phone2 . "<br/>" : '') .
	($email2 ? "E-mail: " . $email2 . "<br/>" : '') .
	($textarea2 ? "Сообщение: " . $textarea2 . "<br/>" : '');


$pagetitle = "Новая заявка с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


