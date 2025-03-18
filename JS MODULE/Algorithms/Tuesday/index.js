//1. Addition
//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5.

let sum = 0
for (let i = 200; i <= 2700; i++) {
    if ((i % 3 == 0 || i % 5 == 0) && (i % 3 == 0 && i % 5 == 0)) {
        sum += i
    }
}
console.log(sum);

//2. Shift the Values

//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

let newArray = []
let x = [2, 1, 6, 4, -7]
for (let i = 0; i < x.length; i++) {
    newArray.unshift(x[i])
}
console.log(newArray);

//3. FizzBuzz
//algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
// let arr = []
// for (let i = 1; i <= 135; i++) {
//     if (i % 3 == 0 && i % 5 == 0) { arr[i] = 'FizzBuzz' }
//     else if (i % 3 == 0) { arr[i] = 'Fizz' }
//     else if (i % 5 == 0) { arr[i] = 'Buzz' }
//     else (arr[i]=i)
// }console.log(arr)

//4. Fibonacci
// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
//0 1 1 2 3 5 8 13 21...
let fib = []
for (let i = 0; i < 100; i++) {
    if (i == 0 || i == 1) {
        fib[i]=i
    } else {
        fib[i]=fib[i-1]+fib[i-2]
    }
}console.log(fib);

//5. Remove the Negative

// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].
let a=[1,-2,4,1]
for (let i=0; i<=a.length; i++ )
{
    if (x[i]<0) {
        a.splice (i,1)
        i=i-1
    }
}console.log(a)
//6. replace every letter of the word Program with *,

let e = ['Man', 'I','Love','The','Matrix','Program']
let word = 'Program'
let st = ''
for (let i=0; i<=word.length; i++ ){
st+='*'
}
for (let i=0; i<=e.length; i++ ){
    if(word == e[i])
        e[i]=st
} console.log(e)

