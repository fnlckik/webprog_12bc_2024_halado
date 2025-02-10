<?php
    header("Access-Control-Allow-Origin: *");

    $username = $_GET["username"];
    if ($username === "farkas.norbert") {
        $name = "Farkas Norbert";
        $friends = 314;
    } else if ($username === "n.adam") {
        $name = "Nagy Adam";
        $friends = 3;
    }

    // if (isset($name)) {
    //     echo $name . ";" . $friends;
    // } else {
    //     http_response_code(404);
    //     echo "Nincs ilyen felhasználó!";
    // }

    if (isset($name)) {
        http_response_code(200);
        echo json_encode(["name" => $name, "friends" => $friends], JSON_UNESCAPED_UNICODE);
    } else {
        http_response_code(404);
        echo json_encode(["error" => "Nincs ilyen felhasználó!"], JSON_UNESCAPED_UNICODE);
    }
?>
