//Find the Minimum and Maximum Values
//Loop through All Numbers Between min and max
//Return the Total Sum


function sumAll(arr) {//spread operator (...) is used to expand an array into individual elements.
    let min = Math.min(...arr);//determine the smallest numbers that may not be in order
    let max = Math.max(...arr);//determine the largest numbers that may not be in order
    let sum = 0;
    
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    
    return sum;
}

console.log(sumAll([1, 4])); 
console.log(sumAll([4, 1])); 
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5])); 
