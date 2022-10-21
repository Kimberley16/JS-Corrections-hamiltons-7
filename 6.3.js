// From this class, create the two classes, Cat and Dog. They will each have two properties, name and greeting (the second property must be static)

class Animal {
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class Cat extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    static greeting = "Meow";
}

class Dog extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    static greeting = "Woof";
}

let cat = new Cat("Skitty");
let dog = new Dog("Rex");

console.log(cat.sayHello());
console.log(dog.sayHello());
