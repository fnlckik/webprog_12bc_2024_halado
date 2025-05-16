class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (!name) this.name = "";
        if (!age) this.age = 0;
    }

    // Nincs konstruktor túlterhelés!
    // Csak egy konstuktor lehet!
    // constructor() { }

    toString() {
        return `${this.name} vagyok, ${this.age} éves.`;
    }

    birthday() {
        this.age++;
    }
}

// -------------------------

const adel = new Person("Adél", 17);
adel.birthday();
adel.birthday();
console.log(adel.toString());

const bela = new Person("Béla", 15);
console.log(bela.toString());
