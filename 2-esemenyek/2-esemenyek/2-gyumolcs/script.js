const table = document.querySelector("table");

// Állapottér!
// field = {fruit: 🍎, value: 7}
const n = 9, m = 5;
let board = [];
const pos = { x: null, y: null };
let remainingSteps = 12;
let points = 0;

document.querySelector("#steps span").innerText = remainingSteps;

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

function createField() {
    const field = {
        fruit: "",
        value: 0
    };
    r = randint(1, 100);
    if (r <= 10) {
        field.fruit = "🍎";
        field.value = 7;
    } else if (r <= 40) {
        field.fruit = "🍇";
        field.value = 5;
    }
    return field;
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
            td.innerText = field.fruit;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    if (pos.x !== null && pos.y !== null) {
        table.rows[pos.y].cells[pos.x].classList.add("current-position");
    }
}

function collectPoints(i, j) {
    const field = board[i][j];
    points += field.value;
    field.fruit = "";
    field.value = 0;
    document.querySelector("#points span").innerText = points;
}

function move(dx, dy) {
    if (pos.x + dx < 0 || pos.x + dx >= m) return;
    if (pos.y + dy < 0 || pos.y + dy >= n) return;
    pos.x += dx;
    pos.y += dy;
    collectPoints(pos.y, pos.x);
    showBoard();
    remainingSteps--;
    document.querySelector("#steps span").innerText = remainingSteps;
    if (remainingSteps === 0) {
        window.removeEventListener("keyup", handleMove);
        window.removeEventListener("keyup", usePower);
    }
}

// e.key, e.code
function handleMove(e) {
    switch (e.key) {
        case "ArrowLeft":
            move(-1, 0);
            break;
        case "ArrowRight":
            move(1, 0);
            break;
        case "ArrowUp":
            move(0, -1);
            break;
        case "ArrowDown":
            move(0, 1);
            break;
        default:
            break;
    }
}

function usePower(e) {
    if (e.key !== "s") return;
    window.removeEventListener("keyup", usePower);
    for (let i = pos.y-1; i <= pos.y+1; i++) {
        for (let j = pos.x-1; j <= pos.x+1; j++) {
            if (0 <= i && i < n && 0 <= j && j < m) {
                collectPoints(i, j);
            }
        }
    }
    showBoard();
}

// keydown, keyup
function choosePosition(e) {
    const td = e.target;
    if (!td.matches("td")) return;
    pos.x = td.cellIndex;
    pos.y = td.parentNode.rowIndex;
    td.classList.add("current-position");
    table.removeEventListener("click", choosePosition);
    window.addEventListener("keyup", handleMove);
    window.addEventListener("keyup", usePower);
}

function startGame() {
    createBoard();
    showBoard();
    button.removeEventListener("click", startGame);
    table.addEventListener("click", choosePosition);
}
const button = document.querySelector("button");
button.addEventListener("click", startGame);