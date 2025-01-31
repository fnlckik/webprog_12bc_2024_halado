// Kutya -> Mosogatás -> Szemét

function walkDog(cb) {
    setTimeout(() => {
        cb("Kutya!");
    }, 2500);
}

function washDishes(cb) {
    setTimeout(() => {
        cb("Mosogatás!");
    }, 1000);
}

function takeTrash(cb) {
    setTimeout(() => {
        cb("Szemét!");
    }, 100);
}

// Callback hell (pyramid of doom)
function houseWork() {
    walkDog(result => {
        console.log(result); // Kutya!
        washDishes(result => {
            console.log(result); // Mosogatás!
            takeTrash(result => {
                console.log(result); // Szemét!
            })
        })
    })
}

houseWork();