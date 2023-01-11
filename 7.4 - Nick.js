const readlineSync = require("readline-sync");

//Note: The fs dependency has not been used in this example.

class PizzaManager {
  constructor(pizzaList = ["Hawai"]) {
    this.pizzaList = pizzaList;
  }

  startUp() {
    console.log(`Hello! Welcome to the Pizza Flavors Manager.

Please choose your actions:

1 - List all the pizza flavors
2 - Add a new pizza flavor
3 - Remove a pizza flavor
4 - Exit this program
`);

    const selection = parseInt(
      readlineSync.question("Enter your action's number: ")
    );
    this.process(selection);
  }

  process(selection) {
    console.log(`Let's process that. You selected ${selection}`);
    switch (selection) {
      case 1:
        this.logList();
        break;
      case 2:
        this.addPizza();
        break;
      case 3:
        this.deletePizza();
        break;
      case 4:
        console.log("good bye!");
        break;
      default:
        console.log(`Sorry that number does not exist, please try again`);
        this.startUp();
    }
  }

  logList() {
    for (let i = 0; i < this.pizzaList.length; i++) {
      console.log(`- ${this.pizzaList[i]}`);
    }
    readlineSync.question("Hit enter to go back");
    this.startUp();
  }

  addPizza() {
    let answer = readlineSync.question(
      "Please add a pizza - to cancel hit enter."
    );

    if (answer == "") {
      this.startUp();
    } else {
      this.pizzaList.push(answer);
      this.addPizza();
    }
  }

  deletePizza() {
    for (let i = 1; i <= this.pizzaList.length - 1; i++) {
      console.log(`${i} - ${this.pizzaList[i]}`);
    }
    let answer = readlineSync.question(
      "Please select the pizza by using it's number in order to remove, press enter to cancel: "
    );

    if (answer == "") {
      this.startUp();
    } else if (answer > this.pizzaList.length - 1) {
      console.log("Sorry that pizza does not exist.");
      this.deletePizza();
    } else {
      this.pizzaList.splice(answer, 1);
      this.deletePizza();
    }
  }
}

let pizzas = [
  "Hawai",
  "Pepperoni",
  "Riverdale special",
  "Americano",
  "Mama's recipe",
];

let pizzaManager = new PizzaManager(pizzas);
pizzaManager.startUp();
