const readlineSync = require("readline-sync");
let arr = []
let done = 0;
let entry = readlineSync.questionInt("Please enter your first number in your array.\n")
arr.push(entry);
while (entry === "" || entry === 'Done') 
{
    entry = readlineSync.questionInt("Please enter a few more numbers for your array.\n");
    arr.push(entry);
}
while (done === 0) {
    if (arr.length <= 2) 
    {
        entry = readlineSync.questionInt("Please enter a few more numbers for your array.\n");
        arr.push(entry);
    }
    else 
    {
        entry = readlineSync.question("Please enter a few more numbers for your array, or send an empty line once done.\n");
        arr.push(Number(entry));
        if (entry === '') 
        {
            done = 1;
            break;
        }
    }
}
arr.pop()

console.log(`${arr.join('+')} = ${arr.reduce((a,b) => a + b)} !`)