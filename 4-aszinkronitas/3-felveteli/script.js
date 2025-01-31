// Promise: igéret, hogy adok majd egy értéket
// resolve: beteljesítés, feloldás
function result() {
    return new Promise(resolve => {
        setTimeout(() => {
            const p = Math.floor(Math.random() * 101);
            resolve(p);
        }, 1000);
    });
}

// "a promise egy thenable object"
result()
.then(point => {
    console.log(point);
});
