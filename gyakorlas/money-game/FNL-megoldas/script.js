let currentMoney =  randint(15, 20) * 1000;
let annaMoney = 0;
let belaMoney = 0;
let player = 1; // 1 - Anna; 2 - Bela
let games = [];

const annaIcon = document.querySelector("#anna-icon");
const belaIcon = document.querySelector("#bela-icon");
const remaining = document.querySelector("#remaining-money");
const annaMoneySpan = document.querySelector("#anna-money");
const belaMoneySpan = document.querySelector("#bela-money");

// 1.
function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

// 3.
function generateImages(ul, s, money) {
    while (s + money <= currentMoney) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = `money-types/${money}.jpg`;
        li.appendChild(img);
        ul.appendChild(li);
        s += money;
    }
    return s;
}

function renderMoney() {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    let s = 0;
    s = generateImages(ul, s, 5000);
    s = generateImages(ul, s, 2000);
    s = generateImages(ul, s, 500);
}

// 4. - 5.
function changePlayerMoney(money) {
    if (player === 1) {
        annaMoney += money;
        player = 2;
        annaMoneySpan.innerText = annaMoney;
        annaIcon.classList.remove("current-player");
        belaIcon.classList.add("current-player");
    } else {
        belaMoney += money;
        player = 1;
        belaMoneySpan.innerText = belaMoney;
        belaIcon.classList.remove("current-player");
        annaIcon.classList.add("current-player");
    }
}

// 9.
function statistics() {
    let dbA = 0, dbB = 0;
    for (const game of games) {
        if (game.winner === "Anna") {
            dbA++;
        } else {
            dbB++;
        }
    }
    document.querySelector("#anna-wins").innerText = dbA;
    document.querySelector("#bela-wins").innerText = dbB;
}

// 6.
function checkWinner() {
    if (currentMoney !== 0) return;
    const winnerDiv = document.querySelector(".winner");
    winnerDiv.classList.add("show");
    const winner = document.querySelector(".winner span");
    winner.innerText = player === 1 ? "Béla" : "Anna";
    const game = {
        winner: winner.innerText,
        money: player === 1 ? belaMoney : annaMoney
    };
    games.push(game);
    localStorage.setItem("games", JSON.stringify(games));
    statistics();
}

// 4.
function takeMoney() {
    const select = document.querySelector("select");
    const index = select.selectedIndex;
    const option = select.options[index]
    const money = parseInt(option.innerText.split(" ")[0]);
    if (money > currentMoney) { return; }
    currentMoney -= money;
    remaining.innerText = currentMoney;
    renderMoney();
    changePlayerMoney(money);
    checkWinner();
}

// 7.
function saveGame() {
    const state = { currentMoney, annaMoney, belaMoney, player };
    localStorage.setItem("state", JSON.stringify(state));
}

// 2.
function startGame() {
    remaining.innerText = currentMoney;
    annaMoneySpan.innerText = annaMoney;
    belaMoneySpan.innerText = belaMoney;
    if (player === 1) {
        annaIcon.classList.add("current-player");
    } else {
        belaIcon.classList.add("current-player");
    }

    renderMoney();

    const modesDiv = document.querySelector(".modes");
    modesDiv.style.display = "none";
    const gameDiv = document.querySelector(".game");
    gameDiv.style.display = "block";

    const takeMoneyButton = document.querySelector(".take-money");
    takeMoneyButton.addEventListener("click", takeMoney);

    const saveGameButton = document.querySelector(".save-game");
    saveGameButton.addEventListener("click", saveGame);
}
const newGameButton = document.querySelector(".new-game");
newGameButton.addEventListener("click", startGame);

// 8.
function loadGame() {
    const state = JSON.parse(localStorage.getItem("state"));
    if (!state) {
        return;
    }
    currentMoney = state.currentMoney;
    annaMoney = state.annaMoney;
    belaMoney = state.belaMoney;
    player = state.player;
    startGame();
}
const continueGameButton = document.querySelector(".continue-game");
continueGameButton.addEventListener("click", loadGame);

// 9.
function loadGames() {
    const data = JSON.parse(localStorage.getItem("games"));
    if (data) {
        games = data;
    }
}
window.addEventListener("load", loadGames);
