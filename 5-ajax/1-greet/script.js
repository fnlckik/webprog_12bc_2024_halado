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

function show(data) {
    document.querySelector("form").classList.add("hidden");
    const div = document.querySelector("#adatok");
    div.classList.remove("hidden");
    div.innerHTML = `
        <p>Név: ${data.name}</p>
        <p>Ismerősök: ${data.friends}</p>
        `;
    div.classList.add("data");
    div.classList.remove("error");
}

function showError(text) {
    const div = document.querySelector("#adatok");
    div.classList.remove("hidden");
    div.innerText = text;
    div.classList.add("error");
    div.classList.remove("data");
}

// AJAX (Asynchronous JavaScript and XML)
const button = document.querySelector("form button");
button.onclick = (e) => {
    e.preventDefault();
    const input = document.querySelector("form input");
    
    fetch(`http://localhost/greet-ajax/?username=${input.value}`)
    .then(response => {
        // response.status === 404
        if (!response.ok) {
            throw new Error("Nincs ilyen felhasználó!");
        }
        return response.json();
    })
    .then(data => show(data))
    .catch(error => {
        // console.log(error.name);
        if (error instanceof TypeError) {
            showError("Nem működik a szerver!");
        } else {
            showError(error.message)
        }
    });
}

/*
fetch(`http://localhost/greet-ajax/?username=${input.value}`)
.then(response => response.json())
.then(data => show(data));
*/

/*
fetch(`http://localhost/greet-ajax/?username=${input.value}`)
.then(response => {
    return response.text();
})
.then(text => {
    const data = JSON.parse(text);
    show(data);
});
*/