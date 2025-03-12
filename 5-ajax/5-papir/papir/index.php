<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: GET");
    
    $data = file_get_contents("data.json");
    $data = json_decode($data);
    $class = $_GET["osztaly"] ?? "";
    
    $response = [];
    if ($class === "") {
        $response = $data;
    } else {
        foreach ($data as $record) {
            if ($record->class === $class) {
                $response[] = $record;
            }
        }
    }
    
    header("Content-Type: application/json");
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
    http_response_code(200);
?>