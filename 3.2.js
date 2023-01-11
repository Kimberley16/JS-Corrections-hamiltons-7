let arr = [1, 2, 3, 4, 5];
let addition = 0;
let average = 0;

for(elem of arr) {
    addition += elem;
    average = addition / arr.length; 
}

console.log("The average is: " + average);
