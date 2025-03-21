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
// const adat = {
//     osztaly: osztaly,
//     tomeg: tomeg
// };
const kuldesButton = document.querySelector("#kuldes");
async function sendDataFetch() {
    const osztaly = document.querySelector("#osztaly-kuldes").value;
    const tomeg = document.querySelector("#tomeg-kuldes").value;
    const adat = { osztaly, tomeg };
    const OPTIONS = {
        method: "POST",
        headers: {
            "Content-Type": "application/xml"
        },
        body: JSON.stringify(adat)
    };
    try {
        const response = await fetch("http://localhost/papir/create/", OPTIONS);
        const data = await response.json();
        if (!response.ok) {
            // throw new Error("Hibás kérés! Hiányzó adat!");
            throw new Error(data.hiba);
        }
        console.log(data);
    } catch (error) {
        // console.error(error.message);
        console.clear();
        console.warn(error.message);
        const p = document.createElement("p");
        p.innerHTML = error.message;
        const hr = document.querySelector("hr");
        document.querySelector("body").insertBefore(p, hr);
    }
}

// function handleLoad(xhr) {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
// }

function sendDataXHR() {
    const osztaly = document.querySelector("#osztaly-kuldes").value;
    const tomeg = document.querySelector("#tomeg-kuldes").value;
    const adat = { osztaly, tomeg };
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        try {
            if (xhr.status === 400) {
                throw new Error("Hibás / hiányos adatokat küldtél!");
            }
            const data = JSON.parse(xhr.response);
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
    xhr.onerror = () => {
        console.log("Nem fut a szerver!");
    }
    // xhr.addEventListener("load", () => {handleLoad(xhr)});
    xhr.open("POST", "http://localhost/papir/create/");
    xhr.send(JSON.stringify(adat));
}
kuldesButton.addEventListener("click", sendDataXHR);
