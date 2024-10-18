function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

function generate() {
    const table = document.querySelector("table");
    let data = "";
    for (let i = 0; i < 10; i++) {
        data += "<tr>";
        for (let j = 0; j < 10; j++) {
            data += `<td>${randint(10, 99)}</td>`;
        }
        data += "</tr>";
    }
    table.innerHTML = data;
}
const button = document.querySelector("button");
button.addEventListener("click", generate);