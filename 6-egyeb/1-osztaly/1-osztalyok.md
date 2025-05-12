# Osztályok

## Hogyan adhatunk meg egy osztályt ES6-ban?

1. Definiáljunk egy `Person` osztályt, amelynek két adattagja `name` és `age`!
2. Adjunk meg egy 2 paraméteres konstruktort!
3. Írjuk felül a `toString()` metódust! Miben másabb a `C#` nyelvhez képest?
4. *Van-e konstruktor túlterhelés?*
5. Hogyan adhatunk meg **privát** mezőket? Legyen mindkét adattag privát!
6. *Mi történik ha privát adattagot akarunk módosítani? (Böngésző konzolon?)*
7. Készítsünk `getter` és `setter` metódusokat! Ellenőrizzük az életkort!
8. Lehessen egy ember életkorát növelni egyel a `birthday()` metódussal!
9. Csináljunk egy statikus `instanceCount` adattagot, ami számolja, hogy hány példányt hoztak létre az osztályból!

## Hogyan működik az öröklődés ES6-ban?
1. Hozzunk létre `Student` osztályt a `Person` leszármazottjaként!
2. Egy diáknak van osztálya (`grade`) is. Készítsünk 3 paraméteres konstruktort hozzá! Hogyan hívhatjuk meg a szülő konstruktort?
3. Írjuk felül a `Student` osztályban a `toString()` metódust! Van-e `protected` mező?
4. Adjunk meg `writeTest(n)` metódust a `Student` osztályban, ami hatására `n` darab dolgozatot ír egy diák! A jegyeket 1 és 5 között véletlenszerűen sorsoljuk ki!
5. Készítsünk `getAverage()` metódust, amely egy diák átlagát adja meg!
