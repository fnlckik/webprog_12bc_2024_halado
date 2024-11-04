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

/*
function handleClick() {
    console.log(this.innerText);
}

const movies = document.querySelectorAll("li");
for (const movie of movies) {
    movie.addEventListener("click", handleClick);
}
*/