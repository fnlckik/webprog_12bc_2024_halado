// callback: egy függvény paraméter, amit egy másik függvény meghív
function result(callback) {
    setTimeout(() => {
        const p = Math.floor(Math.random() * 101); // [0, 100]
        callback(p);
    }, 1000);
}

// function print(p) {
//     console.log(p);
// }

result(p => {
    console.log(p);
});
