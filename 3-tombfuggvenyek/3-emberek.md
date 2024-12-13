# 3-Emberek

Adott egy tömb emberek adataival:
```js
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
```

1. Add meg az első 20 év alatti embert!

2. Hány 40 év alatti ember van?

3. Igaz-e, hogy nincs olyan ember, akinek a neve 6 karakternél hosszabb?

4. Rendezd az embereket életkor szerint növekvő sorrendbe!

5. Mennyi az átlagos életkor?

6. Írd ki az átlagnál idősebb emberek neveit! Csak a neveiket jelenítsd meg!

7. Add meg az utolsó ember nevét, akinek a neve `J` betűvel kezdődik!

8. Ki a legidősebb ember?

9. Add meg azokat az embereket, akiknek ugyanannyi az életkora, mint valaki másnak! (♣)

10. Melyik emberek neve tartalmaz `a` betűt? (♣)

Minta:
```js
F1: { name: 'Laci', age: 18 }
F2: 9
F3: true
F4: [
  { name: 'Laci', age: 18 },
  { name: 'Anikó', age: 24 },
  { name: 'József', age: 24 },
  { name: 'Réka', age: 24 },
  { name: 'Eszter', age: 28 },
  { name: 'Ákos', age: 29 },
  { name: 'Kata', age: 31 },
  { name: 'Tibor', age: 38 },
  { name: 'Gábor', age: 39 },
  { name: 'Dani', age: 47 },
  { name: 'János', age: 52 },
  { name: 'Béla', age: 62 }
]
F5: 34.67
F6: [ 'Dani', 'Béla', 'Gábor', 'János', 'Tibor' ]
F7: József
F8: { name: 'Béla', age: 62 }
F9: [
  { name: 'Anikó', age: 24 },
  { name: 'József', age: 24 },
  { name: 'Réka', age: 24 }
]
F10: [ 'Dani', 'Kata', 'Laci', 'Béla', 'Anikó', 'Réka' ]
```