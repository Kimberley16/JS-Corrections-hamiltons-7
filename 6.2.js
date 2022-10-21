const readlineSync = require("readline-sync");

//Creatinng the class
class Person {
  //Add a constructor
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  //Add a method
  sayHello() {
    return "Hello, " + this.firstname + " " + this.lastname;
  }
}

let name1 = readlineSync.question("Hey, what is your firstname? ");
let name2 = readlineSync.question("Hey, what is your lastname? ");
let obj = new Person(name1, name2);
console.log(obj.sayHello());
