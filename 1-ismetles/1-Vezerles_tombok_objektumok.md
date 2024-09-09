# Vezérlés, tömbök, objektumok

1. **Termékek.** Adott termékeknek a következő listája:
    ```js
    const products = [
        {
            name: "Televízió",
            price: 80000,
            category: "Elektronika"
        },
        {
            name: "Hűtőszekrény",
            price: 120000,
            category: "Háztartási gépek"
        },
        {
            name: "Mosógép",
            price: 100000,
            category: "Háztartási gépek"
        },
        { 
            name: "Laptop",
            price: 150000,
            category: "Elektronika"
        },
        {
            name: "Kávéfőző",
            price: 25000,
            category: "Konyhai eszközök"
        }
    ];
    ```
    
    Írjuk ki a konzolra a legolcsóbb terméket!
    
    *Minta:*

    `Legolcsóbb termék: Kávéfőző (Konyhai eszközök)`

2. **Betűpár.** Írj függvényt, amely meghatározza, hogy egy karaktersorozatban hányszor fordul elő az `ab` részlet! (Vagyis az, hogy egy `a` karaktert egy `b` karakter követ.)
   
    *Példák:*
    ```js
    countABPairs("abba") === 1; countABPairs("abaabaaabaaaa") === 3;
    countABPairs("baba") === 1; countABPairs("ababba") === 2;
    countABPairs("bbaa") === 0;
    ```

3. **Hatvány.** Készíts függvényt `hatvany(a, k)` néven, amely egy paraméterként kapott `a` szám `k`-adik hatványát adja meg!

    *Példák:*
    ```js
    hatvany(7, 2) === 49;   hatvany(2, 5) === 32;
    hatvany(13, 0) === 1;   hatvany(2, -3) === 0.125;
    ```

4. **Számrendszer.** Az `atvalt(n)` függvény képes átváltani 10-es számrendszerből 2-es számrendszerbe. Írd meg!

    *Példák:*
    ```js
    atvalt(3) === 11;       atvalt(5) === 101;
    atvalt(22) === 10110;   atvalt(17531) === 100010001111011;
    ```

5. **Betűrend.** A `hasonlit(a, b)` függvény meghatározza, hogy a két kapott szó közül melyik van korábban az abc-ben. Ha `a`, akkor visszatérési értéke -1, ha `b`, akkor 1, más esetben 0. Valósítsd meg a függvényt úgy, hogy helyesen működjön **magyar ékezetes betűk**kel is! (Elegendő egyjegyű betűkre működnie.)
   
    *Példák:*
    ```js
    hasonlit("áfonya", "banán") === -1;
    hasonlit("állateledel", "állat") === 1;
    hasonlit("almafa", "alligátor") === 1;
    hasonlit("örök", "örök") === 0;
    hasonlit("ökör", "ökrök") === -1;
    hasonlit("igen", "ígéret") === -1;
    ```

## Math object
6. **Másodfokú.** A `solveQuadratic(a, b, c)` függvény paraméterei az $ax^2 + bx + c = 0$ másodfokú egyenlet együtthatói. Visszatérési értéke egy objektum, amely a valós gyököket tartalmazza!
   
    *Példa:*
    ```js
    solveQuadratic(1, 5, -14) => {x1: 2, x2: -7};
    solveQuadratic(1, -6, 9) => {x: 3};
    solveQuadratic(1, 2, 3) => {};
    solveQuadratic(1, -115, 3066) => {x1: 73, x2: 42};
    solveQuadratic(2, 7, 1) => {x1: -0.14921894064178787, x2: -3.350781059358212};
    solveQuadratic(4, -13, 3) => {x1: 3, x2: 0.25};
    ```

7. **Távolság.** Készíts `distance(A, B)` függvényt, amely meghatározza $A(a_1; a_2)$ és $B(b_1; b_2)$ pontok távolságát!
    ```js
    const A = {x: 0, y: 0};
    const B = {x: 3, y: 4};
    const C = {x: 11, y: 10};
    const D = {x: -9, y: -1};

    distance(A, B) === 5;
    distance(A, C) === 14.866068747318506;
    distance(B, C) === 10;
    distance(B, D) === 13;
    distance(C, D) === 22.825424421026653;
    ```

8. **Sokszög kerület.** Ismerjük egy sokszög csúcsait. Határozd meg a kerületét!
    ```js
    const points = [
        {x: 1, y: -1},
        {x: 4, y: 0},
        {x: 5, y: 3},
        {x: 3, y: 4},
        {x: -1, y: 2}
    ];

    perimeter(points) === 16.638310528300117;
    ```

9. **Háromszög terület.** Add meg egy háromszög területét a három oldalának ismeretében!
    ```js
    triangleArea(5, 5, 5) === 10.825317547305483;
    triangleArea(5, 12, 13) === 30;
    triangleArea(40, 70, 100) === 1092.8746497197196;
    ```

10. **Random.** Írj függvényt, amely $[a..b]$ intervallumon generál random (egész) számokat! `randint(a, b)`

11. **Fibonacci.** Random Fibonacci-sorozatnak nevezzük az $f_n = f_{n-1} \pm f_{n-2}$ rekurzív formula által meghatározott sorozatot, amennyiben $f_1 = f_2 = 1$ és a jelölt művelet ugyanakkora valószínűséggel összeadás, mint kivonás. Szimuláld a sorozat első 100 tagjának lehetséges értékeit! `randomFibonacci(100)`

12. **Pontok.** Generálj 1000 darab pontot, melyek mindegyike lefedhető az origo középpontú, 100 egység oldalhússzú négyzettel!

    A `generatePoints()` függvény visszatérési értéke a generált 1000 elemű tömb legyen! A következő feladatokat külön-külön függvényben valósítsd meg!
    
    a. Add meg azokat a pontokat, amelyek az I. síknegyedbe esnek!
    
    b. A pontok hány százaléka fedhető le az origo középpontú, 100 egység átmérőjű körrel?
    
    c. Melyik pont van legközelebb az origohoz?
    
    d. Van-e olyan pont, amely az $x + y = 42$ egyenesre esik?