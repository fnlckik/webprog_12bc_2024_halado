// Pedró Ádám (please): ||||| ||

// event:
// esemény objektum, amelyet minden eseménykezelő függvény kap
// tartalmazza az esemény tulajdonságait
function checkData(event) {
    // console.log(event);
    const checkbox = document.querySelector("input[type=checkbox]");
    if (!checkbox.checked) {
        event.preventDefault();
    }
}
const button = document.querySelector("button");
button.addEventListener("click", checkData);

// event.preventDefault():
// alapértelmezett viselkedést akadályozza meg
// Pl.:
// - form küldése (button)
// - gyormenü (contextmenu) ne jelenjen meg
// - linkre kattintás
// ...

/*
function showMenu(e) {
    e.preventDefault();
}
button.addEventListener("contextmenu", showMenu);
*/