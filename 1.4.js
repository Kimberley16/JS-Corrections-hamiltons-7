const readlineSync = require("readline-sync");
let firstname = readlineSync.question("What's your firstname?\n")
let lastName = readlineSync.question("What's your name?\n")
let city = readlineSync.question("Where are u from?\n")
console.log("Vous vous appelez " + firstname + " " + lastName + " et vous habitez à " + city)