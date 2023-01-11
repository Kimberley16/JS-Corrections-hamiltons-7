//Maxime's correction
// //Write a program that will create a duplicate of a given array.

// Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on the MDN or Google for this one.)


let arr = [1, 2, 3, 4, 5];
let arrCopy = [];

for (let i = 0; i < arr.length; i++) {
        arrCopy.push(arr[i]);

}

console.log (arrCopy);




/////////////////////////////////


let arr2 = [1, 2, 3, 4, 5, 6];

let newArr2 = [];

newArr2 = arr2.splice(0); //splice creates a copy by taking stuff from original from 0 onwards (bc I wrote 0) and pushing into copy

//with slice instead of splice you can keep original array intact

console.log(newArr2);
console.log(arr2);