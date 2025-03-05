//Fibonacci Sequence
//define function
//add loop
//add the previous sum number to every loop
//return the result
//sequence looks like this: 1 1 2 3 5 8 13 21 34 ...

//n = 43 -> x
// n = 101 -> x
// n = 227 -> x
// n = 491 -> x
// n = 881 -> x

// function fibonacci(n) {
//     let a = 1, b = 1;
//     for (let i = 3; i <= n; i++) {
//         [a, b] = [b, a + b]; // Swap the last number and add the next number
//     }
//     return b;
// }

// console.log(fibonacci(43)); 
// console.log(fibonacci(101)); 
// console.log(fibonacci(227)); 
// console.log(fibonacci(491)); 
// console.log(fibonacci(881)); 

//OR
function Fib(num){
    let seq=1
    let seq1=0
    let seq2=0
    for(let i=2; i<=num; i++){
        seq2=seq1
        seq1=seq+seq2

    }return seq
}console.log(Fib(4))