// const n = Math.floor(Math.random() * 100) + 1;

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}
const n = randint(1, 100);

// Csalás magunknak (fejlesztéshez)
// console.log(n);

function handleGuess() {
    const input = document.querySelector("input");
    const guess = parseInt(input.value);

    const li = document.createElement("li");
    if (guess < n) {
        li.innerText = `Nagyobb, mint ${guess}!`;
    } else if (guess > n) {
        li.innerText = `Kisebb, mint ${guess}!`;
    } else {
        li.innerText = "Kitaláltad!";
        button.removeEventListener("click", handleGuess);
        button.disabled = true;
        input.value = "";
        input.disabled = true;
    }
    const ul = document.querySelector("ol");
    ul.appendChild(li);
}
const button = document.querySelector("button");
button.addEventListener("click", handleGuess);