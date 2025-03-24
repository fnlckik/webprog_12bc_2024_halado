<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");

    header("Content-Type: application/json");
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        return 0;
    } else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        http_response_code(400);
        echo json_encode(["hiba" => "Nem fogadok GET kerest!"]);
        return -1;
    }
    
    $data = file_get_contents("../kings.json");
    $data = json_decode($data);
    
    $post = file_get_contents("php://input");
    $post = json_decode($post);
    
    $record["name"] = $post->name ?? "";
    $record["start"] = $post->start ?? "?";
    $record["years"] = $post->years ?? "";
    
    if ($record["name"] === "") {
        echo json_encode(["hiba" => "Hianyzo adat!"]);
        http_response_code(400);
        return -1;
    }

    $i = 0;
    while ($i < count($data) && !($data[$i]->name === $record["name"])) {
        $i++;
    }
    if ($i < count($data)) {
        http_response_code(400);
        echo json_encode(["hiba" => "Letezo kiraly!"]);
    } else {
        $data[] = $record;
        file_put_contents("../kings.json", json_encode($data, JSON_PRETTY_PRINT));
        echo json_encode($record);
        http_response_code(201);
    }
?>