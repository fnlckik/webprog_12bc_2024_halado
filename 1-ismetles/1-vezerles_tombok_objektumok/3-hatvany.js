function hatvany(a, k) {
    if (k === 0) return 1;

    const n = k < 0 ? -k : k;

    let h = 1;
    for (let i = 0; i < n; i++) {
        h = h * a;
    }

    return k < 0 ? 1/h : h;
}

// Pisti
function hatvany(a, k) {
    if (k === 0) return 1;

    let h = 1;
    for (let i = 0; i < Math.abs(k); i++) {
        h = h * a;
    }

    return k < 0 ? 1/h : h;
}

// P. Ádám
function hatvany2(a, k) {
    return Math.pow(a, k);
}
