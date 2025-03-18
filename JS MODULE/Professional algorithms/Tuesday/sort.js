// Finds the smallest element from the unsorted portion.
// Swaps it with the first element of the unsorted portion.
function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){ // Outer loop (controls sorted part)
      let minIdx = i; // Assume first element of unsorted part is the smallest
  
      for (let j = i + 1; j < arr.length; j++){ // Inner loop (finds smallest element)
         if (arr[j] < arr[minIdx]) { // If a smaller element is found
            minIdx = j; // Update index of minimum element
         }
      }
  
      // Swap only if minIdx is different from i (avoiding unnecessary swaps)
      if (minIdx !== i) {
          [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // Swap using destructuring
      }//Swap arr[i] with arr[minIdx] to place the smallest element in the correct position.
       // The array is sorted incrementally, one element at a time.

    }
    return arr; // Return sorted array
  }
  console.log(selectionSort([5, 3, 8, 4, 2]));

  function largestNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {  // Iterate over sub-arrays
        let maxNum = arr[i][0];  // Assume the first element is the largest

        for (let j = 1; j < arr[i].length; j++) { // Iterate inside sub-array
            if (arr[i][j] > maxNum) {
                maxNum = arr[i][j];  // Update max if a larger number is found
            }
        }

        result.push(maxNum);  
    }

    return result;
}

console.log(largestNumbers([
    [9, 5, 1, 3], 
    [80, 27, 17, 26], 
    [32, 26, 37, 48], 
    [109, 1007, 785, 1]
])); 

function titleCase(str) {
    let words = str.toLowerCase().split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
        result.push(capitalizedWord);
    }

    return result.join(" ");
}console.log(titleCase("hello world")); 