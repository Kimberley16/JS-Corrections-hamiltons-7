const readlineSync = require("readline-sync");

/*
    Returns a random number between 1 and 10
 */
function rand10() {
    return Math.floor((Math.random() * 10) + 1);
}

/*
    Returns an array of random numbers between 1 and 10
 */
function multiRand(n) {
    let randomArr = [];

    for (let i = 0; i < n; i++) {
        randomArr.push(rand10());
    }

    return randomArr;
}

/*
    Returns the average of an array
 */
function average(arr) {
    let average = 0;
    let elements = arr.length;

    for (let i = 0; i < elements; i++)
        average += arr[i];

    return average / elements;
}

/*
    Returns the min value of an array
 */
function min(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++)
        min = (arr[i] < min ? arr[i] : min);

    return (min);
}

/*
    Returns the max value of an array
 */
function max(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++)
        max = (arr[i] > max ? arr[i] : max);

    return (max);
}

let n = readlineSync.questionInt("How many numbers ? ");
let arr = multiRand(n);

console.log("array: " + arr);
console.log("min value: " + min(arr));
console.log("max value: " + max(arr));
console.log("average: " + average(arr));

