let array = [43, 2, 1, 32, 42, 89];
let array2 = [4, 1, 3, 4, 7, 9];
let array3 = [1, 2, 3, 10, 5, 6, 7, 8];

function sorting(array) {
    let tempo;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                tempo = array[i];
                array[i] = array[j];
                array[j] = tempo;
            }
        }
    }
    return array;
}

let test = sorting(array);
let test2 = sorting(array2);
let test3 = sorting(array3);

console.log("Sorted arrays : ")
console.log(test);
console.log(test2);
console.log(test3);