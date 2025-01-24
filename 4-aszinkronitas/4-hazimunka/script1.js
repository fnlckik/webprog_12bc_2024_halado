// Kutya -> Mosogatás -> Szemét

function walkDog() {
    setTimeout(() => {
        console.log("Kutya!");
    }, 2500);
}

function washDishes() {
    setTimeout(() => {
        console.log("Mosogatás!");
    }, 1000);
}

function takeTrash() {
    setTimeout(() => {
        console.log("Szemét!");
    }, 100);
}

function houseWork() {
    walkDog();
    washDishes();
    takeTrash();
}

houseWork();

// Gond: rossz sorrendben hajtódnak végre