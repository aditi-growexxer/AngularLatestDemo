<?php
header('Content-Type: application/json');
include '../config.php';
include '../cors.php';

$stmt = $pdo->prepare("SELECT * FROM books");
$stmt->execute();
$books = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($books);
