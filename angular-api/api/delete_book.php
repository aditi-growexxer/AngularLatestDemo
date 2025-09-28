<?php
header('Content-Type: application/json');
include '../config.php';
include '../cors.php';

$data = json_decode(file_get_contents('php://input'), true);

$stmt = $pdo->prepare("DELETE FROM books WHERE id=:id");
$stmt->execute([':id' => $data['id']]);

echo json_encode(['success' => true]);
