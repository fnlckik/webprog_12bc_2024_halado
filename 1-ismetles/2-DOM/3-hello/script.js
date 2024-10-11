function greetUser(name, greeting) {
    const oldDiv = document.querySelector("#old");
    oldDiv.innerHTML = `<p>${greeting} ${name}!</p>`;

    const newDiv = document.querySelector("#new");
    newDiv.style.display = "none";
}

function handleClick() {
    const name = document.querySelector("input").value;

    // const select = document.querySelector("select");
    // const options = document.querySelectorAll("option");
    // console.log(options[select.value - 1].innerText);
    const select = document.querySelector("select");
    const greeting = select[select.selectedIndex].innerText;

    greetUser(name, greeting);

    localStorage.setItem("name", name);
    localStorage.setItem("greeting", greeting);
}
const button = document.querySelector("button");
button.addEventListener("click", handleClick);

function handleLoad() {
    const name = localStorage.getItem("name");
    const greeting = localStorage.getItem("greeting");
    // name === null
    if (name) {
        greetUser(name, greeting);
    }
}
window.addEventListener("load", handleLoad);