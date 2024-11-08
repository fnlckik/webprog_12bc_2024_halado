const n = 12;
const mineCount = 10;
let board = []; // field = {value: ?2?, isMine: true/false}
let revealedCount = 0;

const table = document.querySelector("table");

// --------------------------------------------

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

// Feltölt egy nxn-es mátrixot mezőkkel => board
// field = {value: 0, isMine: false}
function createBoard() {
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            const field = {
                value: 0,
                isMine: false
            };
            row.push(field);
        }
        board.push(row);
    }
}

// A mátrix alapján megjelenít egy táblázatot
// a játékos számára!
function showBoard() {
    const table = document.querySelector("table");
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const td = document.createElement("td");
            const field = board[i][j];
            td.innerText = field.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function startGame() {
    createBoard();
    showBoard();
    button.removeEventListener("click", startGame);
}
const button = document.querySelector("button");
button.addEventListener("click", startGame);