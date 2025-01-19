// F1
function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

const buek = document.querySelector("#buek");
// function updateBuek() {
//     buek.style.color = `rgb(${randint(150, 255)}, ${randint(150, 255)}, ${randint(150, 255)})`;
//     buek.style.backgroundColor = `rgb(${randint(0, 155)}, ${randint(0, 155)}, ${randint(0, 155)})`;
// }
// setInterval(updateBuek, 1000);

function updateBuek() {
    buek.style.color = `rgb(${randint(150, 255)}, ${randint(150, 255)}, ${randint(150, 255)})`;
    buek.style.backgroundColor = `rgb(${randint(0, 155)}, ${randint(0, 155)}, ${randint(0, 155)})`;
    setTimeout(updateBuek, 1000);
}
updateBuek();

// F2
// Várakozás ideje: 1ms és 150ms között!
// 1%-ával növekszik
const loadingDiv = document.querySelector("#loading div");
let width = 0;
function loading() {
    width++;
    loadingDiv.style.width = `${width}%`;
    if (width < 100) {
        setTimeout(loading, randint(1, 150));
    }
}
loading();

// Kitekintés
// Várakozzunk 100-szor 1ms-ot. Mennyi idő telt el? (Hány ms telt el?) => 100ms
// Várakozzunk 100-szor 10ms-ot. Mennyi idő telt el? (Hány ms telt el?) => 1000ms = 1 másodperc
// Várakozzunk 100-szor 100ms-ot. Mennyi idő telt el? (Hány ms telt el?) => 10000ms = 10 másodperc

// Vigyázat! A setTimeout nem ms-ra pontos!
let i = 1;
function varas() {
    i++;
    setTimeout(varas, 1);
    if (i === 100) {
        console.log("Kész!");
        console.log(Date.now() - start);
    }
}
// varas();

function updateTime() {
    reduceTime(remaining, start);
}

// 4500 => 4 seconds, 500 ms => 4 seconds, 50 századmásodperc
function getTime3(time) {
    const min = parseInt(time / (1000*60));
    const sec = parseInt(((time/1000) % 60));
    return `0${min}:${sec.toString().padStart(2, "0")}`;
}

function getTime2(time) {
    time = Math.round(time / 10).toString().padStart(4, "0");
    console.log(time);
    return time.slice(0, 2) + ":" + time.slice(2);
}

function reduceTime(remaining, start) {
    const elapsed = Date.now() - start; // Ennyi idő telt el a mérés kezdete óta
    remaining = 5000*60 - elapsed;
    if (remaining < 0) remaining = 0;
    const timeSpan = document.querySelector("#time");
    // timeSpan.innerText = getTime(remaining); // 5000 => 05:00
    timeSpan.innerText = getTime3(remaining);
    if (remaining > 0) {
        setTimeout(() => {
            reduceTime(remaining, start)
        }, 10);
    }
}

function handleStart() {
    let remaining = 5000*60;
    const start = Date.now(); // 31513513613
    reduceTime(remaining, start);
    input.removeEventListener("click", handleStart);
}

const input = document.querySelector("input");
input.addEventListener("click", handleStart);