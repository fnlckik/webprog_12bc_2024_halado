// F1
function showKings(data) {
    const table = document.querySelector("table");
    table.innerHTML = `
        <tr>
            <th>Név</th>
            <th>Uralkodás</th>
            <th>Portré</th>
        </tr>
    `;
    for (const king of data) {
        const end = king.start + king.years;
        table.innerHTML += `
            <tr>
                <td>${king.name}</td>
                <td>${king.start} - ${end}</td>
                <td><img src="${king.portrait}"></td>
            </tr>
        `;
    }
}

const allButton = document.querySelector("#all");
function getKings() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/kings/");
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        showKings(data);
    }
    xhr.send();
}
allButton.addEventListener("click", getKings);



// F2
function showKing(king) {
    const div = document.querySelector("div");
    let ul = "";
    for (const law of king.laws) {
        ul += `<li>${law.title} (${law.year})</li>`;
    }
    div.innerHTML = `
        <h2>${king.name}</h2>
        <img src="${king.portrait}">
        <ul>${ul}</ul>
    `;
    div.classList.add("card");
}

const searchButton = document.querySelector("#search");
async function searchKing() {
    const name = document.querySelector("select").value;
    try {
        const response = await fetch(`http://localhost/kings/?name=${name}`);
        const data = await response.json();
        // response.status === 404
        if (!response.ok) {
            throw new Error("Nincs ilyen király!");
        }
        showKing(data);
    } catch (error) {
        console.log(error.message);
    }
}
searchButton.addEventListener("click", searchKing);



// F3
const sendButton = document.querySelector("#create");
async function createKing() {
    const name = document.querySelector("#nev").value;
    const start = parseInt(document.querySelector("#kezdes").value);
    const years = parseInt(document.querySelector("#evek").value);
    const king = { name, start, years };
    const OPTIONS = {
        method: "POST",
        body: JSON.stringify(king)
    };
    try {
        const response = await fetch("http://localhost/kings/create/", OPTIONS);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.hiba);
        }
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
sendButton.addEventListener("click", createKing);
