const button = document.querySelector("button");
async function sendDataFetch() {
    const name = document.querySelector("#name").value;
    const job = document.querySelector("#job").value;
    const user = { name, job };
    const OPTIONS = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    };
    const response = await fetch("https://reqres.in/api/users", OPTIONS);
    const data = await response.json();
    console.log(data);
}

// function handleLoad(xhr) {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
// };

async function sendDataXHR() {
    const name = document.querySelector("#name").value;
    const job = document.querySelector("#job").value;
    const user = { name, job };
    // console.log(user);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users");
    // xhr.addEventListener("load", () => { handleLoad(xhr) });
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(user));
}
button.addEventListener("click", sendDataXHR);
// button.onclick = sendDataXHR;