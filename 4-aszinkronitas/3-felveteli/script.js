// Promise: igéret, hogy adok majd egy értéket
// resolve: beteljesítés, feloldás
function result() {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            const p = Math.floor(Math.random() * 101);
            resolve(p);
        }, 1000);
    })
    return promise;
}

// "a promise egy thenable object"
const promise = result();
promise.then(point => {
    console.log(point);
});
