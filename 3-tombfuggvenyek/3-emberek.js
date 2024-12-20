// 12 fő
const people = [
    { name: "Dani", age: 47 },
    { name: "Kata", age: 31 },
    { name: "Laci", age: 18 },
    { name: "Béla", age: 62 },
    { name: "Anikó", age: 24 },
    { name: "Gábor", age: 39 },
    { name: "Eszter", age: 28 },
    { name: "János", age: 52 },
    { name: "József", age: 24 },
    { name: "Tibor", age: 38 },
    { name: "Réka", age: 24 },
    { name: "Ákos", age: 29 }
];

// F1
console.log("F1:", people.find(p => p.age < 20));

// F2
console.log("F2:", people.filter(p => p.age < 40).length);

// F3
// console.log("F3:", !people.some(p => p.name.length > 6));
// Minden ember neve max 6 karakter
console.log("F3:", people.every(p => p.name.length <= 6));

// F4
// console.log("F4:", people.toSorted((a, b) => a.age - b.age));
function compare(p1, p2) {
    if (p1.age < p2.age) {
        return -1;
    } else if (p1.age > p2.age) {
        return 1;
    } else {
        return 0;
    }
}
console.log("F4:", people.toSorted(compare));

// F5
const atlag = people.reduce((s, p) => s + p.age, 0) / people.length;
console.log("F5:", (atlag).toFixed(2));

// F6
console.log("F6:", people.filter(p => p.age > atlag).map(p => p.name));

// F7
console.log("F7:", people.findLast(p => p.name[0] === "J").name);

// F8
console.log("F8:", people.reduce((m, p) => p.age > m.age ? p : m, people[0]));

// F9
// Imperatív megoldás
/*
let x = [];
for (let i = 0; i < people.length; i++) {
    let j = 0;
    while (j < people.length && !(people[j].age === people[i].age && i !== j)) {
        j++;
    }
    if (j < people.length) {
        x.push(people[i]);
    }
}
console.log(x);
*/

// Pedró Ádám megoldása!
console.log("F9:", people.filter(p => people.some(p2 => p2.age === p.age && p !== p2)));

// Nem Pedró Ádám megoldása!
console.log("F9:", people.filter((p, i) => people.some((p2, j) => p2.age === p.age && i !== j)));

// F10
// console.log("F10:", people.filter(p => Array.from(p.name).some(c => c === "a" || c === "A")));

function hasA(p) {
    return Array.from(p.name).some(c => c.toUpperCase() === "A");
}
console.log("F10:", people.filter(p => hasA(p)).map(p => p.name));
