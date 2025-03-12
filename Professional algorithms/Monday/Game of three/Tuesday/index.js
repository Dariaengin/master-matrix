
  // Game of 3s

// Start with a given number.
// If the number is divisible by 3, divide it by 3.
// If it's not, either add 1 or subtract 1 to make it divisible by 3, then divide by 3.
// Repeat this process until the number becomes 1.

function gameOfThree(num) {
    while (num > 1) {  // Continue until num reaches 1
        if (num % 3 === 0) {  // If num is divisible by 3
            num = num / 3;
        } else if (num % 3 === 1) {  // If remainder is 1 (num % 3 === 1)
            num = num - 1;  // Subtract 1 to make it divisible by 3
            num = num / 3;
        } else {  // If remainder is 2 (num % 3 === 2)
            num = num + 1;  // Add 1 to make it divisible by 3
            num = num / 3;
        }
    }
    return num; // Return 1 when the loop ends
}

console.log(gameOfThree(99));