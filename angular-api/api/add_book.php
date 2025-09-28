<?php
header('Content-Type: application/json');
include '../config.php';
include '../cors.php';

$data = json_decode(file_get_contents('php://input'), true);

$stmt = $pdo->prepare("INSERT INTO books (title, author, price) VALUES (:title, :author, :price)");
$stmt->execute([
  ':title' => $data['title'],
  ':author' => $data['author'],
  ':price' => $data['price']
]);

echo json_encode(['id' => $pdo->lastInsertId()]);
