// Adatok kérése
function showData(data) {
    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const table = document.querySelector("table");
    table.innerHTML = `<tr>
        <th>Dátum</th>
        <th>Osztály</th>
        <th>Tömeg</th>
    </tr>`;
}

const keresButton = document.querySelector("#keres");
function getData() {

}
keresButton.addEventListener("click", getData);

// -----------------------------------------------------
// Adatok küldése
const kuldesButton = document.querySelector("#kuldes");
function sendDataFetch() {
    const osztaly = document.querySelector("#osztaly-kuldes").value;
    const tomeg = document.querySelector("#tomeg-kuldes").value;
}

function sendDataXHR() {
    const osztaly = document.querySelector("#osztaly-kuldes").value;
    const tomeg = document.querySelector("#tomeg-kuldes").value;
}
kuldesButton.addEventListener("click", sendDataXHR);
