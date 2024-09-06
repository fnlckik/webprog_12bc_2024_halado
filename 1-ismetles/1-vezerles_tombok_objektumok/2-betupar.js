/*
    countABPairs("abba") === 1; countABPairs("abaabaaabaaaa") === 3;
    countABPairs("baba") === 1; countABPairs("ababba") === 2;
    countABPairs("bbaa") === 0
*/

// Zoli
function countABPairs1(szoveg) {
    let elindult = false;
    let db = 0;
    for (const betu of szoveg) {
        if (betu === "a") {
            elindult = true;
        } else if (betu === "b" && elindult) {
            db++;
            elindult = false;
        } else {
            elindult = false;
        }
    }
    return db;
}

// Sz. Szabolcs
function countABPairs2(szoveg) {
    let db = 0;
    for (let i = 0; i < szoveg.length-1; i++) {
        if (szoveg[i] === "a" && szoveg[i+1] === "b") {
            db++;
        }
    }
    return db;
}

// FNL
function countABPairs(szoveg) {
    return szoveg.split("ab").length-1;
}
