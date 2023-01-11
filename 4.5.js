// the distance between A(xa,ya) and B (xb,yb) √(xA − xB)² + (yA − yB)²

function calcDistance(arrA,arrB){
    if(arrA.length === 2 && arrB.length === 2){
    
        return Math.sqrt(((arrA[0]-arrB[0])**2)+((arrA[1]-arrB[1])**2));
    }

    else{
        return "This will not work"
    }
}
console.log(calcDistance([1,1],[2,2]));