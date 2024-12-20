function increase() {
    const span = document.querySelector("#number");
    span.innerText = parseInt(span.innerText) + 1;
}
const button = document.querySelector("button");
button.addEventListener("click", increase);

// ----------------------------------

