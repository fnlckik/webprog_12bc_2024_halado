const a = [5, 2, 3];

a.pop(); // Kiveszi az utolsót (visszatér vele) - [5, 2]
a.push(7); // Végére teszi - [5, 2, 7]

a.shift(); // Kiveszi az elsőt (visszatér vele) - [2, 7]
a.unshift(11); // Elejére teszi - [11, 2, 7]

console.log("Módosítások:", a);

// 1. Egyesítsük a tömböket!
const b = [3, 4, 5];
const c = [];
const d = [];
console.log("Összefésülve:", c, d);

// 2. Résztömb: 2. elemtől 4. elemig (1. indextől 3. indexig)
const e = [];
console.log("Résztömb:", e);

// 3. Szöveggé alakítás: elválasztó szóköz legyen
const f = [];
console.log("Szöveggé:", f);
