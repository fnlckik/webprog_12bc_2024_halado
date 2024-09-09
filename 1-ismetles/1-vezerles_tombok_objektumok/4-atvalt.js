// Jani
function atvalt(n) {
    let eredmeny = "";
    while (n !== 0) {
        eredmeny = n % 2 + eredmeny;
        n = parseInt(n / 2);
    }
    return parseInt(eredmeny);
}

// B. Szabolcs
function atvalt2(n) {
    return parseInt(n.toString(2));
}