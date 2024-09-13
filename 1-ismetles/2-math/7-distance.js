const A = {x: 0, y: 0};
const B = {x: 3, y: 4};
const C = {x: 11, y: 10};
const D = {x: -9, y: -1};

function distance(A, B) {
    const elso = (A.x-B.x)**2;
    const masodik = (A.y-B.y)**2;
    return Math.sqrt(elso + masodik);
}
