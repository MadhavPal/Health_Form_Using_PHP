<?php

$name = $_POST['name'];
$age = $_POST['age'];
$weight = $_POST['weight'];
$email = $_POST['email'];
#$health_report = $_GET['health_report'] . " .pdf ";
//$health_report = $_FILES['health_report']['name']."<br>"; 
$health_report = $_FILES['health_report'].['name']; 

//Database connection
$conn =new mysqli('localhost','root','','health');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(name,age,weight,email,health_report)values(?, ?, ?, ?, ?)");
    $stmt->bind_param("siisb",$name, $age, $weight, $email, $health_report);
    $stmt->execute();
    echo "Registration Successfully...";
    $stmt->close();
    $conn->close();
}
?>

