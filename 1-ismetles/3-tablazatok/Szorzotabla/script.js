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
    let data = "";
    for (let i = 0; i < n; i++) {
        data += "<tr>";
        for (let j = 0; j < n; j++) {
            data += `<td>${(i+1)*(j+1)}</td>`;
        }
        data += "</tr>";
    }
    table.innerHTML = data;
}
const input = document.querySelector("input[type=range]");
input.addEventListener("input", generateTable);
// input.onchange = generateTable;
