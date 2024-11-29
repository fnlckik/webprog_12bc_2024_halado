const table = document.querySelector("table");

// Állapottér!
// field = {fruit: 🍎, value: 7}
const n = 9, m = 5;
let board = [];
const pos = { x: null, y: null };
let remainingSteps = 12;
let points = 0;

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

function createField() {

}

function createBoard() {
    board = [];
    for (let i = 0; i < n; i++) {
        row = [];
        for (let j = 0; j < m; j++) {
            const field = createField();
            row.push(field);
        }
        board.push(row);
    }
}

function showBoard() {
    table.innerHTML = "";
    for (const row of board) {
        const tr = document.createElement("tr");
        for (const field of row) {
            const td = document.createElement("td");
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function collectPoints(i, j) {

}

function move(dx, dy) {
    
}

function handleMove(e) {
    
}

function usePower(e) {

}

function choosePosition(e) {

}

function startGame() {
    createBoard();
    showBoard();
    button.removeEventListener("click", startGame);
    table.addEventListener("click", choosePosition);
}
const button = document.querySelector("button");
button.addEventListener("click", startGame);