const readlineSync = require("readline-sync");
const fibonacci = () => {
    let n = readlineSync.questionInt("Please provide a number: \n")
    if(n <= 1) {
        console.log(n);
    }

    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 2] + result[i - 1];
    }

    console.log(result[result.length - 1]);
}

fibonacci()