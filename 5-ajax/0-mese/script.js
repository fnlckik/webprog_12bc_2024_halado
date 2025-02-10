const start = Date.now();
const time = document.querySelector("#time");
setInterval(() => {
    const current = Date.now();
    time.innerText = parseInt((current - start) / 1000) + " mp";
}, 1000);

// -----------------------------------------------

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

const table = document.querySelector("table");
for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
        const td = document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

setInterval(() => {
    const i = randint(0, 2);
    const j = randint(0, 3);
    table.rows[i].cells[j].style.backgroundColor = `rgba(${randint(0, 255)}, ${randint(0, 255)}, ${randint(0, 255)}, 0.5)`;
}, 1000);

// ---------------------------------
// AJAX (Asynchronous JavaScript and XML)
// XMLHttpRequest: kérést lebonyolító objektum
const button = document.querySelector("form button");
button.onclick = (e) => {
    e.preventDefault();
    const input = document.querySelector("form input");
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost/greet-ajax/?username=${input.value}`);
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    xhr.send();
}