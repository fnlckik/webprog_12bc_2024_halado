const n = 12;
const mineCount = 10;
let board = []; // field = {value: ?2?, isMine: true/false}
let revealedCount = 0;

const table = document.querySelector("table");

// --------------------------------------------

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

// Megnöveli az (x, y) szomszédainak értékeit!
function incrementNeighbours(x, y) {
    for (let i = x-1; i <= x+1; i++) {
        for (let j = y-1; j <= y+1; j++) {
            if (0 <= i && 0 <= j && i < n && j < n && !(i === x && j === y)) {
                board[i][j].value++;
            }
        }
    }
}

function generateMines() {
    let count = 0;
    while (count < mineCount) {
        const x = randint(0, n-1);
        const y = randint(0, n-1);
        if (!board[x][y].isMine) {
            board[x][y].isMine = true;
            count++;
            incrementNeighbours(x, y);
        }
    }
}

// Feltölt egy nxn-es mátrixot mezőkkel => board
// field = {value: 0, isMine: false}
function createBoard() {
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            const field = {
                value: 0,
                isMine: false,
                isReveled: false
            };
            row.push(field);
        }
        board.push(row);
    }
    generateMines();
}

function getText(i, j) {
    const field = board[i][j];
    if (!field.isReveled) return "";
    else if (field.isMine) return "💣";
    else if (field.value !== 0) return field.value;
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
            td.innerText = getText(i, j);
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