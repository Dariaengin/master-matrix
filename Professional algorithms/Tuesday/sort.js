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
  