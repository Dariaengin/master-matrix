//BUBBLE SORT

// Compare adjacent elements.
// Swap if they are in the wrong order (larger element moves to the right).
// Repeat the process for n-1 passes until the array is sorted.
// In each pass, the largest element "bubbles up" to the correct position.

function bubbleSort(arr){
    var len = arr.length;
 
    for (var i = len - 1; i >= 0; i--){  // Outer loop (number of passes)
      for (var j = 1; j <= i; j++){  // Inner loop (swaps adjacent elements)
        if (arr[j - 1] > arr[j]){  // If left element is greater than right, swap
            var temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
 }

 console.log(bubbleSort([7,5,2,4,3,9])); 


//  Sorting [7,5,2,4,3,9]
// 7 vs 5	Yes	[5, 7, 2, 4, 3, 9]
// 7 vs 2   Yes	[5, 2, 7, 4, 3, 9]
// 7 vs 4	Yes	[5, 2, 4, 7, 3, 9]
// 7 vs 3	Yes	[5, 2, 4, 3, 7, 9]
// 7 vs 9   No	[5, 2, 4, 3, 7, 9]
// [5, 2, 4, 3, 7, 9]  // Compare 5-2 (swap)
// [2, 4, 3, 5, 7, 9]  // Compare 4-3 (swap)

 
//SELECTİON SORT

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
 