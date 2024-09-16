// Math.random()
// [0, 1) intervallumon lebegőpontos

// Math.random() * 5
// [0, 5) intevallumrl random szám?

// Math.floor(Math.random() * 5)
// [0..4] intervallum => 0, 1, 2, 3, 4

// Math.floor(Math.random() * 5) + 3
// [3..7] intervallum => 3, 4, 5, 6, 7

// Math.floor(Math.random() * HANYFELE) + MINERT
// [a..b]
// HANYFELE: b-a+1
// MINERT: a

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

