// String.fromCharCode(65) === "A"
// "a".charCodeAt() === 97

function genABC() {
    let abc = [];
    for (let i = 97; i < 97 + 26; i++) {
        abc.push(String.fromCharCode(i));
    }
    return abc;
}

const abc = [
    'a', 'á', 'b', 'c', 'd',
    'e', 'é', 'f', 'g', 'h',
    'i', 'í', 'j', 'k', 'l',
    'm', 'n', 'o', 'ó', 'ö',
    'ő', 'p', 'q', 'r', 's',
    't', 'u', 'ú', 'ü', 'ű',
    'v', 'w', 'x', 'y', 'z'
];

function keres(c) {
    let i = 0;
    while (abc[i] !== c) {
        i++;
    }
    return i;
}

function hasonlit(a, b) {
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) {
        i++;
    }

    // edge case (szélsőséges eset)
    if (i >= a.length && i >= b.length) return 0;
    else if (i >= a.length) return -1;
    else if (i >= b.length) return 1;

    const elso = keres(a[i]);
    const masodik = keres(b[i]);
    return elso < masodik ? -1 : 1;
}

function hasonlit2(a, b) {
    return a.localeCompare(b);
}
