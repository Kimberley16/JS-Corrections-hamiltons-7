const readlineSync = require("readline-sync");

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get Name() {
        return `${this.firstName} ${this.lastName} `;
    }

    set Name(val) { // Jon,Snow,Arya
        // The first part split will contain the firstname and the second part will contain the lastname
        this.firstName = val.split(" ")[0]; // Jon
        this.lastName = val.split(" ")[1]; // Snow
    }
}

let obj1 = new Person("Jon", "Snow");

console.log(obj1.Name);

obj1.Name = "Galadriel Noldor";

console.log(obj1.firstName);
console.log(obj1.lastName);