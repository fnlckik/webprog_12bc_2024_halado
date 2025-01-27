function round(cb) {
    setTimeout(() => {
        const p = Math.floor(Math.random() * 301);
        cb(p);
    }, 1000);
}

function competition() {
    round(point => {
        console.log(point);
        if (point >= 100) {
            round(point => {
                console.log(point);
                if (point >= 100) {
                    round(point => {
                        console.log(point);
                        console.log("Vége a versenynek!");
                    })
                } else {
                    console.log("Kiestél!");
                }
            })
        } else {
            console.log("Kiestél!");
        }
    })
}
competition();