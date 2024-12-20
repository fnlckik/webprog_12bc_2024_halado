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

console.log(year, month, day);
