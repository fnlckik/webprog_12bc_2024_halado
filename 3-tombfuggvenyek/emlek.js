const x = [3, 7, -5];

function sum(x, k) {
    let s = k;
    for (const e of x) {
        s = s + e;
    }
    return s;
}

/*
for (let i = 1; i < x.length; i++) {
    if (x[i] > m) {
        m = x[i];
    }
}
*/
/*
if (e > m) {
    m = e;
} else {
    m = m;
}
*/
function max(x, k) {
    let m = k;
    for (const e of x) {
        m = e > m ? e : m;
    }
    return m;
}

console.log("Összeg:", sum(x, 0));
console.log("Maximum:", max(x, x[0]));
