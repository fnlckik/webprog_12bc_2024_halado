// this: akihez az eseménykezelő tartozik (ul)
// e.target: aki az eseményt kiváltotta (li)

// elem.matches(selector):
// igaz értéket ad, ha az "elem" illeszkedik a "selector"-ra

// elem.closest(selector):
// megadja a legközelebbi őst, aki illeszkedik a szelektorra
// (most magát az elemet is önmaga ősének tekintjük)
// ha nincs ilyen akkor null az értéke
function handleClick(e) {
    const li = e.target.closest("li");
    if (li && li.matches("ul li")) {
        console.log(li.innerText);
    }
}
const ul = document.querySelector("ul");
ul.addEventListener("click", handleClick);

// ----------------------------------------------------------

function swapMovies(li1, li2) {
    const firstNumber = li1.innerText.split(". ")[0];
    const firstTitle = li1.innerText.split(". ")[1];

    const secondNumber = li2.innerText.split(". ")[0];
    const secondTitle = li2.innerText.split(". ")[1];

    li1.innerText = `${firstNumber}. ${secondTitle}`;
    li2.innerText = `${secondNumber}. ${firstTitle}`;
}

// azt az <li> elemet tárolja, akire legutóbb kattintottunk
let first = null;
function selectMovie(e) {
    const li = e.target;
    if (!li.matches("li")) return;
    if (first) {
        swapMovies(first, li);
        first = null;
    } else {
        first = li;
    }
}
ul.addEventListener("click", selectMovie);