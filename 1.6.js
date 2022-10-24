//Demandez deux nombres entiers à l'utilisateur?
const readlineSync = require("readline-sync");//poser une quesion dans son code 

let variableOne = readlineSync.question("donnez moi un chiffre entier ?");
let variableTwo = readlineSync.question("donnez moi un chiffre ?");

let resultat = variableOne % variableTwo;//Affichez le reste de la division entière des deux nombres.
console.log(resultat);
