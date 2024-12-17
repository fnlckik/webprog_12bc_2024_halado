# 4-Játékok

Adott egy tömb számítógépes játékok adataival:
```js
const games = [
    { title: "Baldur's Gate III", price: 59.99, multiplayer: true },
    { title: "Starfield", price: 59.99, multiplayer: false },
    { title: "Cyberpunk 2077", price: 34.99, multiplayer: false },
    { title: "The Sims 4", price: 0.00, multiplayer: false },
    { title: "Fortnite", price: 0.00, multiplayer: true },
    { title: "Counter-Strike 2", price: 0.00, multiplayer: true },
    { title: "League of Legends", price: 0.00, multiplayer: true },
    { title: "Hades II", price: 24.99, multiplayer: false },
    { title: "Diablo IV", price: 69.99, multiplayer: true },
    { title: "Apex Legends", price: 0.00, multiplayer: true },
    { title: "Call of Duty: Modern Warfare III", price: 69.99, multiplayer: true },
    { title: "Assassin's Creed Mirage", price: 49.99, multiplayer: false },
    { title: "Rainbow Six Siege", price: 19.99, multiplayer: true },
    { title: "Far Cry 6", price: 29.99, multiplayer: true },
    { title: "The Elder Scrolls V: Skyrim", price: 39.99, multiplayer: false },
    { title: "Fallout 76", price: 39.99, multiplayer: true },
    { title: "Overwatch 2", price: 0.00, multiplayer: true },
    { title: "Hogwarts Legacy", price: 59.99, multiplayer: false },
    { title: "World of Warcraft: Dragonflight", price: 49.99, multiplayer: true },
    { title: "Tom Clancy's Ghost Recon Breakpoint", price: 19.99, multiplayer: true }
];
```

A `multiplayer` mező jelentése, hogy a játék többjátékos módban is játszható.

1. Add meg azokat a játékokat, amelyek ára 50€ és 70€ közötti (a két határt is beleértve)!

2. Hány játék neve áll 2-nél több szóból?

3. Igaz-e, hogy nincs 60€-nál drágább játék?

4. Add meg a legdrágább játék adatait!

5. Add meg az első ingyenes multiplayer játék címét!

6. Adj meg egy multiplayerben nem játszható játékot, ami drágább a "Far Cry 6"-nál!

7. Rendezd a játékokat a nevük hossza szerint növekvő sorrendbe. Csak a játékok neveit add meg!

8. Mennyi a nem ingyenes játékok átlagos ára egész euróra kerekítve?

9.  Rendezd a játékokat úgy, hogy a multiplayer játékok kerüljenek előre, a többi pedig hátra! Csak a játékok címét és árát tartsd meg! (♣)

10. Add meg minden játékhoz, hogy az eredeti listában hány multiplayer játék van előtte? (♣)

Minta:
```js
F1: [
  { title: "Baldur's Gate III", price: 59.99, multiplayer: true },
  { title: 'Starfield', price: 59.99, multiplayer: false },
  { title: 'Diablo IV', price: 69.99, multiplayer: true },
  {
    title: 'Call of Duty: Modern Warfare III',
    price: 69.99,
    multiplayer: true
  },
  { title: 'Hogwarts Legacy', price: 59.99, multiplayer: false }
]
F2: 10
F3: false
F4: { title: 'Diablo IV', price: 69.99, multiplayer: true }
F5: Fortnite
F6: { title: 'Starfield', price: 59.99, multiplayer: false }
F7: [
  'Fortnite',
  'Hades II',
  'Starfield',
  'Diablo IV',
  'Far Cry 6',
  'The Sims 4',
  'Fallout 76',
  'Overwatch 2',
  'Apex Legends',
  'Cyberpunk 2077',
  'Hogwarts Legacy',
  'Counter-Strike 2',
  "Baldur's Gate III",
  'League of Legends',
  'Rainbow Six Siege',
  "Assassin's Creed Mirage",
  'The Elder Scrolls V: Skyrim',
  'World of Warcraft: Dragonflight',
  'Call of Duty: Modern Warfare III',
  "Tom Clancy's Ghost Recon Breakpoint"
]
F8: 45€
F9: [
  { title: "Baldur's Gate III", price: 59.99 },
  { title: 'Fortnite', price: 0 },
  { title: 'Counter-Strike 2', price: 0 },
  { title: 'League of Legends', price: 0 },
  { title: 'Diablo IV', price: 69.99 },
  { title: 'Apex Legends', price: 0 },
  { title: 'Call of Duty: Modern Warfare III', price: 69.99 },
  { title: 'Rainbow Six Siege', price: 19.99 },
  { title: 'Far Cry 6', price: 29.99 },
  { title: 'Fallout 76', price: 39.99 },
  { title: 'Overwatch 2', price: 0 },
  { title: 'World of Warcraft: Dragonflight', price: 49.99 },
  { title: "Tom Clancy's Ghost Recon Breakpoint", price: 19.99 },
  { title: 'Starfield', price: 59.99 },
  { title: 'Cyberpunk 2077', price: 34.99 },
  { title: 'The Sims 4', price: 0 },
  { title: 'Hades II', price: 24.99 },
  { title: "Assassin's Creed Mirage", price: 49.99 },
  { title: 'The Elder Scrolls V: Skyrim', price: 39.99 },
  { title: 'Hogwarts Legacy', price: 59.99 }
]
F10: [
  { title: "Baldur's Gate III", multibefore: 0 },
  { title: 'Starfield', multibefore: 1 },
  { title: 'Cyberpunk 2077', multibefore: 1 },
  { title: 'The Sims 4', multibefore: 1 },
  { title: 'Fortnite', multibefore: 1 },
  { title: 'Counter-Strike 2', multibefore: 2 },
  { title: 'League of Legends', multibefore: 3 },
  { title: 'Hades II', multibefore: 4 },
  { title: 'Diablo IV', multibefore: 4 },
  { title: 'Apex Legends', multibefore: 5 },
  { title: 'Call of Duty: Modern Warfare III', multibefore: 6 },
  { title: "Assassin's Creed Mirage", multibefore: 7 },
  { title: 'Rainbow Six Siege', multibefore: 7 },
  { title: 'Far Cry 6', multibefore: 8 },
  { title: 'The Elder Scrolls V: Skyrim', multibefore: 9 },
  { title: 'Fallout 76', multibefore: 9 },
  { title: 'Overwatch 2', multibefore: 10 },
  { title: 'Hogwarts Legacy', multibefore: 11 },
  { title: 'World of Warcraft: Dragonflight', multibefore: 11 },
  { title: "Tom Clancy's Ghost Recon Breakpoint", multibefore: 12 }
]
```