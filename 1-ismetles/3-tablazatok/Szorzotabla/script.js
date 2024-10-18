function generateTable1() {
    const span = document.querySelector("h2 span");
    const n = parseInt(input.value);
    span.innerText = n;

    const table = document.querySelector("table");
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const td = document.createElement("td");
            td.innerText = (i+1)*(j+1);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function generateTable() {
    const span = document.querySelector("h2 span");
    const n = parseInt(input.value);
    span.innerText = n;

    const table = document.querySelector("table");
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        table.innerHTML += "<tr>";
        for (let j = 0; j < n; j++) {
            table.innerHTML += `<td>${(i+1)*(j+1)}</td>`;
        }
        table.innerHTML += "</tr>";
    }
}
const input = document.querySelector("input[type=range]");
input.addEventListener("input", generateTable);
// input.onchange = generateTable;
