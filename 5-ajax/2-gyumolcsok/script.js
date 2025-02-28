// UI: User Interface (felhasználói felület)
// Hogyan kommunikál a felhasználó a programmal?

// API: Application Programming Interface
// Hogyan kommunikálnak egymással az alkalmazások?

// Endpoint (végpont): olyan pontok, amelyek a szerveren megszólíthatóak

const URL = "https://hur.webmania.cc/products.json";

function show(data) {
    const ul = document.querySelector("ul");
    const products = data.products;
    for (const product of products) {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src=${product.picture}>
            <p>Név: ${product.name}</p>
            <p>Ár: ${product.price} Ft</p>
        `;
        ul.appendChild(li);
    }
}

async function getFruitsAsync() {
    const response = await fetch(URL);
    const data = await response.json();
    show(data);
}

// fetch + then (Promise chain)
function getFruitsFetch() {
    fetch(URL)
    .then(response => response.json())
    .then(data => show(data));
}

function getFruitsXHR() {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        show(data);
    }
    xhr.open("GET", URL);
    xhr.send();
}

/*
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.response);
        show(data);
    }
}
*/

const button = document.querySelector("button");
button.addEventListener("click", getFruitsXHR);