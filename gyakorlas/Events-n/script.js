const n = 8;
let m = [];
let increment = 1;
const table = document.querySelector("table");

function createMatrix(value) {
    m = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(value);
        }
        m.push(row);
    }
}
createMatrix(5);

function isBlack(i, j) {
    return (i + j) % 2 === 0;
}

// -------------------------------------

// F1



// F2



// F3



// F4


