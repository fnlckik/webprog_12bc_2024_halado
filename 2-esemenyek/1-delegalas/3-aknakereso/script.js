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
                isReveled: false,
                isFlagged: false
            };
            row.push(field);
        }
        board.push(row);
    }
    generateMines();
}

function getText(i, j) {
    const field = board[i][j];
    if (field.isFlagged) return "🚩";
    else if (!field.isReveled) return "";
    else if (field.isMine) return "💣";
    else if (field.value !== 0) return field.value;
    else return "";
}

// A mátrix alapján megjelenít egy táblázatot
// a játékos számára!
// if (board[i][j].isReveled) {
//     td.classList.add("revealed");
// }
function showBoard() {
    const table = document.querySelector("table");
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const td = document.createElement("td");
            td.innerText = getText(i, j);
            td.classList.toggle("revealed", board[i][j].isReveled);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function revealNeighbors(x, y) {
    for (let i = x-1; i <= x+1; i++) {
        for (let j = y-1; j <= y+1; j++) {
            if (0 <= i && 0 <= j && i < n && j < n && !board[i][j].isReveled) {
                board[i][j].isReveled = true;
                board[i][j].isFlagged = false;
                if (board[i][j].value === 0) {
                    revealNeighbors(i, j);
                }
            }
        }
    }
}

function handleClick(e) {
    const td = e.target;
    if (!td.matches("td")) return;
    const j = td.cellIndex; // cellIndex: Hanyadik oszlop?
    const tr = td.parentNode;
    const i = tr.rowIndex; // rowIndex: Hanyadik sor?
    if (board[i][j].isFlagged) return;
    board[i][j].isReveled = true;
    if (board[i][j].value === 0) {
        revealNeighbors(i, j);
    }
    showBoard();
}

function handleFlag(e) {
    e.preventDefault(); // Ne jelenjen meg a gyorsmenü!
    const td = e.target;
    if (!td.matches("td")) return;
    const j = td.cellIndex;
    const tr = td.parentNode;
    const i = tr.rowIndex;
    if (board[i][j].isReveled) return;
    board[i][j].isFlagged = !board[i][j].isFlagged;
    showBoard();
}

// contextmenu: kattintás jobb gombbal
function startGame() {
    createBoard();
    showBoard();
    button.removeEventListener("click", startGame);
    table.addEventListener("click", handleClick);
    table.addEventListener("contextmenu", handleFlag);
}
const button = document.querySelector("button");
button.addEventListener("click", startGame);