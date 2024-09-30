// const n = Math.floor(Math.random() * 100) + 1;

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}
const n = randint(1, 100);

function handleGuess() {
    const input = document.querySelector("input");
    console.log(input.value);
}
const button = document.querySelector("button");
button.addEventListener("click", handleGuess);