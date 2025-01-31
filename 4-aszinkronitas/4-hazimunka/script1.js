// Kutya -> Mosogatás -> Szemét

function walkDog() {
    setTimeout(() => {
        return "Kutya!";
    }, 2500);
}

function washDishes() {
    setTimeout(() => {
        return "Mosogatás!";
    }, 1000);
}

function takeTrash() {
    setTimeout(() => {
        return "Szemét!";
    }, 100);
}

function houseWork() {
    console.log(walkDog());
    console.log(washDishes());
    console.log(takeTrash());
}

houseWork();

// Gond: rossz sorrendben hajtódnak végre