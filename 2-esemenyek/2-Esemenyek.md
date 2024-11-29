# 2. Események

1. **Rajzlap.** Készíts egy rajzoló alkalmazást `<svg>` segítségével, amelyet használva szakaszokat és köröket tudunk rajzolni!

    a. Két egymást követő kattintásra rajzoljunk ki egy szakaszt a megfelelő pontok között! `handleClick()`

    `nameSpaceURI`: http://www.w3.org/2000/svg

    Koordináta-rendszerek:

    - `clientY`: böngésző (látható részének) tetejétől távolság
 
    - `pageY`: oldal (totális) tetejétől távolság
    
    - `screenY`: képernyő (monitor) tetejétől távolság
    
    - `offsetY`: elem (e.target) tetejétől távolság

    <p align="center">
    <img width="300" src="./Kepek/coordinates.png">
    </py>

    ```html
    <line x1="216" y1="195" x2="184" y2="229" stroke="black">
    ```

    Javasolt egy `createLine(p1, p2)` segédfüggvény használata!

    b. Az egér két kattintás közötti mozgatása esetén jelezzük, hogyan nézne ki a rajz aktuális állapota! `handleMove()`

    **Ötlet**: tegyük le a pontot az egér lenyomásakor, majd mozgatáskor módosítsunk az `<svg>` utolsó elemén.

    c. Két kattintás helyett oldjuk meg a feladatot az egérgomb nyomva tartásával! `mousedown`, `mouseup`

    d. A `ctrl` billentyű nyomva tartása esetén ne szakaszt rajzoljunk, hanem kört! `createCircle(p1, p2)`, `drawObject(x, y, isCircle)`

    ```html
    <circle cx="50" cy="50" r="50" fill="white" fill-opacity="0" />
    ```

    e. Kezeljük le azt a hibát, amikor az egeret a rajzterületen nyomjuk le, de azon kívül engedjük fel!

    **Ötlet**: mozgatáskor figyeljük, hogy elhagyjuk-e a vásznat valamelyik oldalról, és amennyiben igen, akkor váltsunk ki egy `mouseup` eseményt! `isMouseOut(x, y)`

    f. Kezeljük le azt a hibát, amikor az egeret a rajzterületen kívül nyomjuk le, majd azon belül engedjük fel!

    **Ötlet**: csak akkor hozzunk létre új elemet ha `mousedown` esemény váltódott ki (vizsgáljuk az esemény típusát)

2. **Szüret.** Készíts egy táblás játékot, amelyben a játékteret gyümölcsökkel töltjük fel, majd a játékos célja, hogy adott lépés felhasználásával a lehető legtöbb értékű gyümölcsöt gyűjtse össze!
   
    a. A játék kezdetén generálj egy $n\times m$-es mátrixot, amely mezőket tartalmaz. Minden mezőnek van egy `fruit` és egy `value` adattagja. Az első a mezőben található gyümölcs, a második a gyümölcs értéke. Pl.:

    ```js
    field = {fruit: 🍎, value: 7}
    ```

    Egy mezőben 10%-os valószínűséggel legyen 🍎 és 30%-os valószínűséggel 🍇.

    b. A táblázat kirajzolása után a játékos egy cellára kattintva kiválasztja a kezdő pozícióját. Ezt eltároljuk egy `pos` objektumban, majd a `current-position` css osztály használatával a játékos számára is jelezzük az aktuális mezőt. `choosePosition()`

    c. Tudjon a játékos a nyilak segítségével közlekedni a táblázatban. Miután lenyom egy gombot, lépjünk a megfelelő irányba egy cellát. Szükség szerint módosítsuk a `pos` objektumot, majd jelenítsük meg az új pozíciónak megfelelően a játékteret.
    
    Ügyelj rá, hogy ne lépjünk ki a táblázatból! `handleMove()`, `move(dx, dy)`

    d. Számoljuk a pontokat! Amikor egy mezőre érünk, szüreteljük az ott található gyümölcsöket, és a `points` változó aktuális értékét megjelenítjük a felhasználó számára is! `collectPoints(i, j)`

    e. Korlátozzuk a lépések számát! Miután elfogynak a játékos lépései, ne reagáljunk a gombok lenyomására!

    f. Legyen a játékosnak egy szuper képessége is, amelyet a játék során legfeljebb egyszer használhat. Amikor lenyomja az "S" billentyűt, akkor az aktuális cella szomszédairól begyűjtjük automatikusan a gyümölcsöket. (A képesség használata nem csökkenti a hátralévő lépések számát.) `usePower()`