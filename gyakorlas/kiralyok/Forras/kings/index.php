<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: GET");
    
    $data = file_get_contents("kings.json");
    $data = json_decode($data);
    $name = $_GET["name"] ?? "";
    
    $response = [];
    if ($name === "") {
        foreach ($data as $record) {
            $king = [
                "name" => $record->name,
                "start" => $record->start,
                "years" => $record->years,
                "portrait" => $record->portrait ?? ""
            ];
            $response[] = $king;
        }
        http_response_code(200);
    } else {
        foreach ($data as $record) {
            if ($record->name === $name) {
                $response[] = $record;
            }
        }
        if (count($response) === 0) {
            http_response_code(404);
        } else {
            $response = $response[0];
            http_response_code(200);
        }
    }
    header("Content-Type: application/json");
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>