// Sum All Odd Fibonacci
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5, and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

// function sumFibs(num) {
//   return num;
// }
// sumFibs(4);

// Define a function that takes a number as a parameter
// Define an empty array variable to hold the Fibonacci sequence
// Define two variables to hold two first elements
// Add these elements to the array
// For loop to iterate through the array from i=2 to the given number
// Define a variable to hold the next element as a sum of two previous numbers
// Set prev number equal current number
// Set curr number equal next
// Add current number to the array
// Return the array
// Define the next function that takes fib array as a parameter
// Define a variable to hold the sum
// For loop to iterate through the array from i=0 to the length
// Condition to check if the current fib number is odd
// True - add it to the sum
// Return the sum
// Call the function

// const fibonacciSecuence = (num) => {
//     let fibArr = [];
//     let prev = 1;
//     let curr = 1;
//     fibArr.push(prev, curr);
//     for (let i = 3; i <= num; i++) {
//       const next = prev + curr;
//       prev = curr;
//       curr = next;
//       fibArr.push(curr);
//     }
//     return fibArr;
//   };

//   const sumOddFibs = (fibs) => {
//     let sum = 0;
//     for (let i = 0; i < fibs.length; i++) {
//       if (fibs[i] % 2 !== 0) {
//         sum += fibs[i];
//       }
//     }
//     return sum;
//   };
//   console.log(sumOddFibs(fibonacciSecuence(4))); // 5
//   console.log(sumOddFibs(fibonacciSecuence(7))); // 23
//   console.log(sumOddFibs(fibonacciSecuence(43))); // 784198803 

//IT is not working because 4 is not a Fibonacci number!!!!!


function sumAllOddFibonacci(n) {
    let prevNr = 1;
    let currentNr = 1;
    let sum = 2;
    for (let nextNr = prevNr + currentNr; nextNr <= n; nextNr = prevNr + currentNr) {
        if (nextNr % 2 !== 0) {
            sum += nextNr;
        }
        prevNr = currentNr;
        currentNr = nextNr;
    }
    return sum;
}
console.log(sumAllOddFibonacci(12));

function febNumbers(limit){
    let febSeq= [0,1];
    let sum = 0;
    sum += febSeq[0];
    sum += febSeq[1];
    let nextNum = febSeq[febSeq.length-1] + febSeq[febSeq.length-2]
    while(nextNum <= limit){
        febSeq.push(nextNum)
        if(nextNum %2 !== 0 ){
            sum += nextNum;  
        }
        // febSeq.push(nextNum)
        nextNum = febSeq[febSeq.length-1] + febSeq[febSeq.length-2]
    }
    return sum
}

console.log(febNumbers(10))