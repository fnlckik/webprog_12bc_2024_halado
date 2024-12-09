const x = [2, 6, 5, 1, 6, -2, 12, -1, 12, 6, -5, 7]; // 12 elem
console.log("Eredeti:", x);

// Anonymous function
/*
function (e) {
    return e * e;
}
*/

// Lambda kifejezések: arrow function (nyíl függvény)
// (e) => e * e;

// Csak egy paraméter!
// e => e * e;
function square(e) {
    return e * e;
}

function isNegative(e) {
    return e < 0;
}



// ------------------------------------------------------
// 2015 - ES6

function pluszHarom(e) {
    return e + 3;
}

// 1. Másolás - Adjuk meg a számok négyzeteit!
const squares = x.map(e => e * e);
console.log("Négyzetek:", squares);

// 2. Kiválogatás - Adjuk meg a negatív elemeket!
// predicate: logikai értéket adó függvény
const negatives = x.filter(e => e < 0);
console.log("Negatívak:", negatives);

// A számok négyzetei közül akarom a párosakat!
// const evenSquares = squares.filter(e => e % 2 === 0);
const evenSquares = x.map(e => e * e).filter(e => e % 2 === 0);
console.log("Páros négyzetek:", evenSquares);

// 3. Megszámolás - Negatívak száma
const negativeCount = x.filter(isNegative).length;
console.log("Negatívak száma:", negativeCount);

// 4. Eldöntés - Van-e páros?
const anyEven = x.some(e => e % 2 === 0);
console.log("Van-e páros:", anyEven);

// 5. Eldöntés (optimista) - Mindegyik páros?
const everyEven = x.every(e => e % 2 === 0);
console.log("Mindegyik páros:", everyEven);

// 6. Keresés
// a) Hol van az első negatív? Ha nincs, akkor a -1 helyen van.
// b) Mennyi az értéke? Ha nincs, akkor undefined.
const firstNegative = x.find(isNegative);
const firstNegativeIndex = x.findIndex(isNegative);
const lastNegative = x.findLast(isNegative); // !!! 2022 !!!
const lastNegativeIndex = x.findLastIndex(isNegative);
console.log("Első negatív (hely, érték):", firstNegativeIndex+1, firstNegative);
console.log("Utolsó negatív (hely, érték):", lastNegativeIndex+1, lastNegative);


// ------------------------------------------------------
// 7. Rendezzük az elemeket növekvő sorrendbe:

function comparer(a, b) {
    if (a < b) return -1
    else if (a > b) return 1
    else return 0;
}

function comparer2(a, b) {
    /*
    if (a < b) return a-b // negativ
    else if (a > b) return a-b // pozitiv
    else return a-b; // 0
    */
    return a - b;
}
const sorted = x.toSorted((a, b) => a - b); // !!! 2023 !!!
console.log("Növekvő sorrend:", sorted);

// Comparer function: (a, b)-ről képez le -1, 0, 1 elemekre
// -1, ha a < b
// 0, ha a === b
// 1, ha a > b

function cf(a, b) {
    if (a % 2 === 0 && b % 2 !== 0) {
        return -1;
    } else if (a % 2 !== 0 && b % 2 === 0) {
        return 1;
    } else {
        return 0;
    }
}

const evensFirst = x.toSorted(cf);
console.log("Párosak előre sorrend:", evensFirst);



// ------------------------------------------------------
// 8. Összegzés - Mennyi az elemek összege?
const sum = "";
console.log("Összeg:", sum);

// 9. Maximum kiválasztás
// a) Mennyi a legnagyobb elem?
// b) Hol van a legnagyobb?
const maxValue = "";
const maxIndex = "";
const maxIndex2 = "";
console.log("Maximum (első, utolsó, érték):", maxIndex, maxIndex2, maxValue);



// ------------------------------------------------------
// Kiterjesztés (indexek)
// 10. Kiválogatás - Minden második elemet (páros indexűeket)
const evenPositions = [];
console.log("Páros sorszámúak:", evenPositions);

// 11. Keresés - Adjuk meg az elsőt, aminek az értéke nagyobb az indexénél
const firstBig = "";
console.log("Értéke nagyobb, mint az indexe:", firstBig);

// 12. Írjuk ki a sorszámokat és az értékeket egymás mellé!
for (const e of x) {
    //console.log(`${e}`);
}
