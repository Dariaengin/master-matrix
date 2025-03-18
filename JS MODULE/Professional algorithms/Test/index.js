function countDown(n) {
    if(n <= 0) {
        console.log("Done");
        return;
    }
    console.log(n);
    countDown(n - 1);
    console.log("Suprize");
}

countDown(5);
console.log("Program End");


function removeNegatives(arr) {
    if (arr.length === 0) {
        return [];
    }
    if (arr[0] < 0) {
        return removeNegatives(arr.slice(1));
    }
    return [arr[0]].concat(removeNegatives(arr.slice(1)));
}

let X = [1, -2, 4, 1];
console.log(removeNegatives(X)); 
