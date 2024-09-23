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