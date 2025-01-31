// pending: folyamatban
// fullfilled: beteljesült, jó állapot (elfogadó állapot)
// rejected: elutasítás (elutasító állapot)
function check(jegy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (1 <= jegy && jegy <= 5) {
                resolve(jegy);
            } else {
                reject(jegy);
            }
        }, 1000);
    });
}

const a = check(4); // OK
a
.then(message => {
    console.log("Szupi: " + message);
})
.catch(message => {
    console.log("Hiba: " + message);
});

const b = check(17); // ERROR
b
.then(message => {
    console.log("Szupi: " + message);
})
.catch(message => {
    console.log("Hiba: " + message);
});
