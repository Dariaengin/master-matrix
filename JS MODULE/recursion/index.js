var num = Number(prompt("What number do you want to find the factorial of?"));

  var factorial = function(n) {
      if (n < 0) {
          return "Factorial is not defined for negative numbers!";
      }
      if (n == 0) {
          return 1;
      } else {
          return n * factorial(n - 1);
      }
  }
  
  console.log(factorial(num));