// JSON: JavaScript Object Notation

function greetUser(user) {
    const oldDiv = document.querySelector("#old");
    oldDiv.innerHTML = `<p>${user.greeting} ${user.name}!</p>`;
    const newDiv = document.querySelector("#new");
    newDiv.style.display = "none";
}

function getUser() {
    const name = document.querySelector("input").value;
    const select = document.querySelector("select");
    const greeting = select[select.selectedIndex].innerText;
    return { name, greeting };
}

function handleClick() {
    const user = getUser();
    greetUser(user);
    localStorage.setItem("user", JSON.stringify(user));
}
const button = document.querySelector("button");
button.addEventListener("click", handleClick);

function handleLoad() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        greetUser(user);
    }
}
window.addEventListener("load", handleLoad);