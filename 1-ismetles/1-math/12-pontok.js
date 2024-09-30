function generatePoints() {
    const pontok = [];
    for (let i = 0; i<1000; i++) {
        const x = randint(-50, 50);
        const y = randint(-50, 50);
        const pont = {x, y};
        pontok.push(pont);
    }
    return pontok;
}

// a) Kiválogatás tétel
function a(pontok) {
    const pozitivak = [];
    for (const pont of pontok) {
        if (pont.x > 0 && pont.y > 0) {
            pozitivak.push(pont);
        }
    }
    return pozitivak;
}

// b) Megszámolás tétel
function b(pontok) {
    let db = 0;
    for (const pont of pontok) {
        if (distance(pont, {x: 0, y: 0}) <= 50) {
            db++;
        }
    }
    const szazalek = db / pontok.length * 100;
    return szazalek;
}

// Tesztelés
// b(generatePoints());

// c) Minimumkiválasztás tétel
function c(pontok) {
    let closest = pontok[0];
    const origo = {x: 0, y: 0};
    for (const pont of pontok) {
        if (distance(pont, origo) < distance(closest, origo)) {
            closest = pont;
        }
    }
    return closest;
}

// d) Eldöntés tétel => Keresés tétel
function d(pontok) {
    let i = 0;
    while (i < pontok.length && !(pontok[i].x + pontok[i].y === 42)) {
        i++;
    }
    if (i < pontok.length) {
        return pontok[i];
    } else {
        return {};
    }
}

