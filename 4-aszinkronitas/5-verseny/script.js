function round(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p = Math.floor(Math.random() * 301);
            if (p < 100 && n < 3) {
                reject(p);
            } else {
                resolve(p);
            }
        }, 1000);
    });
}

function competition() {
    round(1)
    .then(point => {
        console.log(point);
        return round(2);
    })
    .then(point => {
        console.log(point);
        return round(3);
    })
    .then(point => {
        console.log(point);
        console.log("Vége a versenynek!");
        // console.log("Köszönöm a részvételt!");
    })
    .catch(error => {
        console.log(error);
        console.log("Kiestél!");
        // console.log("Köszönöm a részvételt!");
    })
    .finally(() => {
        console.log("Köszönöm a részvételt!");
    });
}
competition();