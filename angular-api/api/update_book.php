<?php
header('Content-Type: application/json');
include '../config.php';
include '../cors.php';

$data = json_decode(file_get_contents('php://input'), true);

$stmt = $pdo->prepare("UPDATE books SET title=:title, author=:author, price=:price WHERE id=:id");
$stmt->execute([
  ':title' => $data['title'],
  ':author' => $data['author'],
  ':price' => $data['price'],
  ':id' => $data['id']
]);

echo json_encode(['success' => true]);
