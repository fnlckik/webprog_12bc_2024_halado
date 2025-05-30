export class Person {
    #name;
    #age;
    static instanceCount = 0; // osztályszintű adattag

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
        if (!name) this.#name = "";
        if (!age) this.#age = 0;
        Person.instanceCount++;
    }

    // Nincs konstruktor túlterhelés!
    // Csak egy konstuktor lehet!
    // constructor() { }

    get age() {
        return this.#age;
    }

    set age(value) {
        if (value < 1 || value > 100) return;
        this.#age = value;
    }

    get name() {
        return this.#name;
    }

    toString() {
        return `${this.#name} vagyok, ${this.#age} éves.`;
    }

    birthday() {
        this.#age++;
    }
}