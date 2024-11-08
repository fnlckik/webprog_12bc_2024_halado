const n = 12;
const mineCount = 10;
let board = []; // field = {value: ?2?, isMine: true/false}
let revealedCount = 0;

const table = document.querySelector("table");

// --------------------------------------------

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

// Feltölt egy nxn-es mátrixot mezőkkel
// field = {value: 0, isMine: false}
function createBoard() {
    
}

// A mátrix alapján megjelenít egy táblázatot
// a játékos számára!
function showBoard() {
    
}

function startGame() {
    createBoard();
    showBoard();
}
const button = document.querySelector("button");
button.addEventListener("click", startGame);