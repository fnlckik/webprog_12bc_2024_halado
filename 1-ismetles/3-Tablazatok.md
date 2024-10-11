# 3. Táblázatok

1. **Szorzótábla.** Készíts egy $n\times n$-es szorzótáblát! `generateTable()`

    a. A csúszka értékét megváltoztatva az aktuális méret jelenlen meg az oldalon található `<span>` elemben! Oldd meg a feladatot `change` és `input` eseményt használva is!

    b. Generáld le a táblázat tartalmát a szokásos DOM műveletek felhasználásával! (`createElement`, `appendChild`)

    c. Használd a `table` elem `innerHTML` tulajdonságát a táblázat elkészítéséhez!

    <p align="center">
    <img src="./Kepek/szorzotabla.png" height="250">
    </p>

2. **Oszthatóság.**

    a. Generálj egy $10\times 10$-es táblázatot, amely értékei $10$ és $99$ közötti számok véletlenszerűen (a két határt is beleértve)! `generate()`

    b. Tárold el a táblázat tartalmát `localStorage`-ban! Az oldal újratöltésekor a korábban eltárolt táblázatot lássuk! Első betöltéskor generáljon újat! `showTable()`

    c. Készíts `setClickHandlers()` néven  függvényt, amely a táblázat minden cellájához hozzárendel egy `handleClick()` eseménykezelőt.
    
    Amikor egy cellára kattintunk, módosul a hozzá tartozó osztályok listája. Ha eddig alkalmazva volt az elemre az `oszthato` osztály akkor a továbbiakban nem lesz, és fordítva! 
    
    A táblázat DOM-ba illesztését követően hívd is meg ezt a függvényt!

    d. Oldd meg az előző feladatot a `classList`-nek a `toggle` metódusát használva!

    e. Az osztó mezőbe gépeléskor a megadott számmal osztható cellákra alkalmazzuk az `oszthato` osztályt! `selectNumbers()`

    <p align="center">
    <img src="./Kepek/oszthatosag.png" height="400">
    </p>