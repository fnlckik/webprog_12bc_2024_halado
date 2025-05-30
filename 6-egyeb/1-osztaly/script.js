import { Person } from "./person.js";

const adel = new Person("Adél", 17);
adel.birthday();
adel.birthday();
// adel.#age = 150; // csak konzolon működik
console.log(adel.toString());
adel.age = 150;
console.log(adel.age);

const bela = new Person("Béla", 15);
console.log(bela.toString());

const csaba = new Student("Csaba", 16, 10);
console.log(csaba.toString());
csaba.writeTest(7);
console.log(csaba.grades);
console.log(csaba.getAverage());
