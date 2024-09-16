const points = [
    {x: 1, y: -1},
    {x: 4, y: 0},
    {x: 5, y: 3},
    {x: 3, y: 4},
    {x: -1, y: 2}
];

function perimeter(pontok) {
    let osszeg = 0;
    for (let i = 0; i<pontok.length-1; i++){
        osszeg += distance(pontok[i], pontok[i+1]);
    }
    osszeg += distance(pontok[0], pontok[pontok.length-1])
    return osszeg;
}