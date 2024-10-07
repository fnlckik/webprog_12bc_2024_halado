function handleClick() {
    const name = document.querySelector("input").value;
    const oldDiv = document.querySelector("#old");
    oldDiv.innerHTML = `<p>Szia ${name}!</p>`;

    const newDiv = document.querySelector("#new");
    newDiv.style.display = "none";

    localStorage.setItem("name", name);
}
const button = document.querySelector("button");
button.addEventListener("click", handleClick);

function handleLoad() {
    const name = localStorage.getItem("name");
    if (name === null) {
        return;
    }
    const oldDiv = document.querySelector("#old");
    oldDiv.innerHTML = `<p>Szia ${name}!</p>`;

    const newDiv = document.querySelector("#new");
    newDiv.style.display = "none";
}
window.addEventListener("load", handleLoad);