// String.fromCharCode(65) === "A"
// "a".charCodeAt() === 97

function genABC() {
    let abc = [];
    for (let i = 97; i < 97 + 26; i++) {
        abc.push(String.fromCharCode(i));
    }
    return abc;
}

let abc = ['a', 'á', 'b', 'c', 'd', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'ö', 'ő', 'p', 'q', 'r', 's', 't', 'u', 'ú', 'ü', 'ű', 'v', 'w', 'x', 'y', 'z'];

function hasonlit(a, b) {
    // ???
}