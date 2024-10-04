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

    const ol = document.querySelector("ol");
    if (guess < n) {
        ol.innerHTML += `<li>Nagyobb, mint ${guess}!</li>`;
    } else if (guess > n) {
        ol.innerHTML += `<li>Kisebb, mint ${guess}!</li>`;
    } else {
        ol.innerHTML += "<li>Kitaláltad!</li>";
        button.removeEventListener("click", handleGuess);
        button.disabled = true;
        input.value = "";
        input.disabled = true;
    }
}
const button = document.querySelector("button");
button.addEventListener("click", handleGuess);