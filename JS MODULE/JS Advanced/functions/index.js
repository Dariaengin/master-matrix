//Exercise 1
// The condition age > 18 
//If age > 18 is true-return true.
//If age > 18 is false, return true or false based on user input.
const checkAge = (age) => age > 18 || confirm('Do you have your parents permission to access this page?');
console.log(checkAge)

//Exercise 2
//function pow(x,n) that returns x in power n(multiplies x by itself n times and returns the result.)

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// P.S. In this task, the function should support only the natural values of n: integers up from 1.

const pow = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
};
console.log(pow(3, 2)); 
console.log(pow(3, 3)); 
console.log(pow(1, 100)); 

//Exercise 3
// Replace Function Expressions with arrow function
const ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
//Exercise 4
// object calculator with three methods:
// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    a: 0,
    b: 0,
  
    read() {
      this.a = Number(prompt("Enter first number:", 0));//prompt() is a built-in JS function to take input and converts it to a number using Number().
      this.b = Number(prompt("Enter second number:", 0));
    },
  
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    }
  };
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());

  //Exercise 5
  const min = (a, b) => (a < b ? a : b);//If a < b, return a. else-return b

console.log(min(5, 8));  // Output: 5 5 is less than 8
console.log(min(10, 3)); // Output: 3 because 10 is more than 3 so we return 3
console.log(min(7, 7));  // Output: 7 equal

  

