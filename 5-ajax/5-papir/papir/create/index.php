<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        return 0;
    }
    
    $data = file_get_contents("../data.json");
    $data = json_decode($data);
    
    $post = file_get_contents("php://input");
    $post = json_decode($post);
    
    $record["date"] = date("Y-m-d");
    $record["class"] = $post->osztaly ?? "";
    $record["weight"] = (float)$post->tomeg ?? 0.0;
    
    header("Content-Type: application/json");
    if ($record["class"] !== "" && $record["weight"] !== 0.0) {
        $data[] = $record;
        file_put_contents("../data.json", json_encode($data, JSON_PRETTY_PRINT));
        echo json_encode($record);
        http_response_code(201);
    } else {
        // echo json_encode(["hiba" => rawurlencode("Hiányzó adat!")]);
        echo json_encode(["hiba" => "Hianyzo adat!"]);
        http_response_code(400);
    }
?>