// Sum All Primes
// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

// function sumPrimes(num) {
//   return num; }
// sumPrimes(10);
//A prime number is a number greater than 1 that has only two divisors: 1 and itself.
// Examples of prime numbers: 2, 3, 5, 7, 11, 13, 17, ...
//The results should be like :
// sumPrimes(10)  // should return a number.
// sumPrimes(10) // should return 17.
// sumPrimes(977)  // should return 73156.

// Define a function that takes a given number as a parameter
// Define a variable that holds a sum equal to 0
// For loop to iterate through the array from i=2 to the given number including
// Set boolean variable isPrime as a true (because 2 is a prime number)
// Another For loop to iterate through the array from j equal to 2 till i
// Condition to check if the current number is divisible to others
// True - then set the isPrime equal to false
// False - check next
// Condition to check if isPrime is true
// True - set the sum equal to the sum plus the number that meets the condition
// Return the sum
// Call the function

const sumPrimes = (num) => {
    let sum = 0;
  
    for (let i = 2; i <= num; i++) {
      let isPrimeNum = true;
  
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrimeNum = false;
        }
      }
  
      if (isPrimeNum) {
        sum += i;
      }
    }
  
    return sum;
  };
  
  console.log(sumPrimes(10)); // should return 17
  console.log(sumPrimes(977)); // should return 73156
  