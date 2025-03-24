// F1
function showKings(data) {
    const table = document.querySelector("table");

}

const allButton = document.querySelector("#all");
function getKings() {

}
allButton.addEventListener("click", getKings);



// F2
function showKing(data) {
    const div = document.querySelector("div");

}

const searchButton = document.querySelector("#search");
async function searchKing() {
    const name = document.querySelector("select").value;

}
searchButton.addEventListener("click", searchKing);



// F3
const sendButton = document.querySelector("#create");
async function createKing() {
    const name = document.querySelector("#nev").value;
    const start = document.querySelector("#kezdes").value;
    const years = document.querySelector("#evek").value;

}
sendButton.addEventListener("click", createKing);
