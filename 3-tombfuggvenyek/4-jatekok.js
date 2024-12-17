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

// F1
console.log("F1:", games.filter(g => 50 <= g.price && g.price <= 70));

// F2
console.log("F2:", games.filter(g => g.title.split(" ").length > 2).length);

// F3
console.log("F3:", games.every(g => g.price <= 60));

// F4
console.log("F4:", games.reduce((m, g) => g.price > m.price ? g : m));

// Alternatív megoldás: rendezés
console.log("F4:", games.toSorted((g1, g2) => g1.price > g2.price ? -1 : g1.price < g2.price ? 1 : 0)[0]);

// F5
console.log("F5:", games.find(g => g.price === 0.0 && g.multiplayer).title);

// F6
const fcPrice = games.find(g => g.title === "Far Cry 6").price;
console.log("F6:", games.find(g => !g.multiplayer && g.price > fcPrice));

// F7
function cf(g1, g2) {
    if (g1.title.length < g2.title.length) {
        return -1;
    } else if (g1.title.length > g2.title.length) {
        return 1;
    } else {
        return 0;
    }
}
console.log("F7:", games.toSorted(cf).map(g => g.title));

// F8
const sum = games.filter(g => g.price > 0).reduce((s, g) => s + g.price, 0);
const count = games.filter(g => g.price > 0).length;
console.log("F8:", (sum / count).toFixed(0) + "€");

// F9
function compare(g1, g2) {
    if (g1.multiplayer) {
        return -1; // g1 < g2
    } else if (g2.multiplayer) {
        return 1; // g1 > g2
    } else {
        return 0;
    }
}
console.log("F9:", games.toSorted(compare).map(g => ({title: g.title, price: g.price})));

// Alternatív megoldás: szétválogatás + egyesítés
const multis = games.filter(g => g.multiplayer);
const nomultis = games.filter(g => !g.multiplayer);
const multiOrder = [...multis, ...nomultis];
console.log("F9:", multiOrder.map(g => ({"title": g.title, "price": g.price})));

// F10
console.log("F10:", games.map((g, i) => ({"title": g.title, "multibefore": games.filter((g2, j) => g2.multiplayer && j < i).length})));
