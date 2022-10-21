const readlineSync = require("readline-sync");

let minAge = readlineSync.questionInt("Enter Minimum Age: ");
let maxAge = readlineSync.questionInt("Enter Maximum Age: ");
let currentAge = readlineSync.questionInt(" Enter Current Age: ");

if(minAge<currentAge && currentAge<maxAge){
    console.log("Entry within range");
}

else if (minAge > maxAge){
    console.log("Brain.exe stopped its execution on the current endpoit: %USER% \n Please reboot user");
}

else{
    console.log("Entry not within Age range");
}