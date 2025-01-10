function increase() {
    const span = document.querySelector("#number");
    span.innerText = parseInt(span.innerText) + 1;
}
const button = document.querySelector("button");
button.addEventListener("click", increase);

// ----------------------------------

const timestamp = Date.now(); // Hány ms (ezredmásodperc) telt el 1970. 01. 01. óta? ~kb. statikus metódus
const today = new Date(); // példányosítás, meghívjuk a konstruktort
const ww2 = new Date("1939-09-01"); // "polimorfizmus"

const year = today.getFullYear();
const month = today.getMonth() + 1; // 0-tól 11-ig
const day = today.getDate();
const weekday = today.getDay(); // 0 - Vasárnap, 1 - Hétfő, ... 

// console.log(year, month, day);
const dateSpan = document.querySelector("#datum");
// dateSpan.innerText = `${year}-${month<10 ? "0"+month : month}-${day<10 ? "0"+day : day}`;
// dateSpan.innerText = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
// dateSpan.innerText = `${year}. ${month.toString().padStart(2, "0")}. ${day.toString().padStart(2, "0")}.`;
dateSpan.innerText = today.toLocaleDateString();

// 11:07:??
const timeSpan = document.querySelector("#ido");

const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
// timeSpan.innerText = `${hour}:${minute}:${second}`;
timeSpan.innerText = today.toLocaleTimeString();

// --------------------------------
// Szinkron programozás
// Utasítások egymás után hajtódnak végre

function print() {
    for (let i = 0; i < 10; i++) {
        const start = Date.now();
        let current = start;
        while (current - start < 1000) {
            current = Date.now();
        }
        console.log(i);
    }
}

// console.log(1);
// console.log(2);
// console.log(3);

// let i = 0;
// while (true) {
//     const start = Date.now();
//     let current = start;
//     while (current - start < 1000) {
//         current = Date.now();
//     }
//     console.log(i);
//     i++;
// }

// Aszinkron végrehajtás
// Párhuzamosan hajtunk végre több folyamatot!

// setTimeout(console.log, 10000, "alma");

/*
    const id = setTimeout(console.log, 5000, "alma");
    clearTimeout(id);
*/

// function print() {
//     console.log("alma");
// }

// setTimeout(() => {
//     console.log("alma");
// }, 2000);

// Milyen sorrendben történik meg?
// setTimeout(() => {
//     console.log("Alma");
// }, 1000);

// setTimeout(() => {
//     console.log("Körte");
// }, 1500);

// setTimeout(() => {
//     console.log("Banán");
// }, 0);

// console.log("Szilva");
// print();

// Párhuzamos végrehajtás
// for (let i = 0; i < 7; i++) {
//     setTimeout(() => {
//         console.log("Első: " + i);
//     }, 1000);
// }
// setTimeout(() => {
//     for (let i = 0; i < 7; i++) {
//         console.log("Első: " + i);
//     }
// }, 1000);
/*
for (let i = 0; i < 7; i++) {
    setTimeout(() => {
        console.log("Első: " + i);
    }, 1000*(i+1));
}
for (let i = 0; i < 7; i++) {
    setTimeout(() => {
        console.log("Második: " + i);
    }, 1000*(i+1));
}
*/

/*
for(let i = 0; i < 10; i++) {
    setTimeout(() => {
        timeSpan.innerText = new Date().toLocaleTimeString();
    }, 1000*(i+1));
}
*/

/*
let i = 0;
while (true) {
    setTimeout(() => {
        timeSpan.innerText = new Date().toLocaleTimeString();
    }, 1000*(i+1));
    i++;
}
*/

function updateTime() {
    timeSpan.innerText = new Date().toLocaleTimeString();
    setTimeout(updateTime, 1000);
}
updateTime();

