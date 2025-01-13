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
