// te distance between A(xa,ya) and B (xb,yb) √(xA − xB)2 + (yA − yB)2

function calcDistance(arrA,arrB){
    
    return Math.sqrt(((arrA[0]-arrB[0])**2)+((arrA[1]-arrB[1])**2));
}
console.log(calcDistance([1,1],[2,2]));