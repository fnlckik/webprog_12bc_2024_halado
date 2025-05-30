class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // ős konstruktor meghívása
        this.grade = grade; // Melyik osztályba jár a diák?
        this.grades = [];
    }

    toString() {
        return `${this.name} vagyok, ${this.grade} osztályba járok.`;
    }

    writeTest(n) {
        for (let i = 0; i < n; i++) {
            const grade = Math.floor(Math.random() * 5 + 1); // Milyen jegyet kap a diák?
            this.grades.push(grade);
        }
    }

    getAverage() {
        const s = this.grades.reduce((sum, cur) => sum + cur);
        return s / this.grades.length;
    }
}