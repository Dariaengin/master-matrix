
// Magic Squares

// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row,
// column, and major diagonal adds up to 15. Here's an example:
  /* <code>8 1 6 3 5 7 4 9 2</code>; */


//declare function isMagicSquare, array as paramneter
//declare 2 variables to hold sum of diagonals
// condition if diagonals are equal to each other
//return true
//if not => return false

// [8, 1, 6,
// 3, 5, 7,
// 4, 9, 2] => true
// [2, 7, 6, 9, 5, 1, 4, 3, 8] => true
// [3, 5, 7, 8, 1, 6, 4, 9, 2] => false
// [8, 1, 6, 7, 5, 3, 4, 9, 2] => false

let array = [3, 5, 7, 8, 1, 6, 4, 9, 2];
// The loop checks three columns:
// Column 1: arr[0] + arr[3] + arr[6]
// Column 2: arr[1] + arr[4] + arr[7]
// Column 3: arr[2] + arr[5] + arr[8]
function magicsquare (arr){
  let sum = 15
      // Check both diagonals
  let diagonal1=arr[0]+arr[4]+arr[8] // Left to Right Diagonal First diagonal (top-left to bottom-right).
  let diagonal2= arr[2]+arr[4]+arr[6]// Right to Left Diagonal  Second diagonal (top-right to bottom-left).
  if(diagonal1!==15 || diagonal2!==15 ){
      return false
  }   // Check each row
  for(let i=0 ; i<arr.length ; i+=3){
      if (arr[i]+arr[i+1]+arr[i+2]!==sum){
          return false
      }
  }  // Check each column
  for(let i=0 ; i<=2 ; i++){
      if(arr[i]+arr[i+3]+arr[i+6]!==sum){
          return false
      }
  }
  return true
}




// function magicsquare(arr) {
//   let diagonal1 = arr[0] + arr[4] + arr[8];
//   let diagonal2 = arr[2] + arr[4] + arr[6];
//   let diagonal3 = arr[1] + arr[2] + arr[3];
//   let diagonal4 = arr[4] + arr[5] + arr[6];
//   let diagonal5 = arr[7] + arr[8] + arr[9];
//   let diagonal6 = arr[1] + arr[4] + arr[7];
//   let diagonal7 = arr[2] + arr[5] + arr[8];
//   let diagonal8 = arr[3] + arr[6] + arr[9];
//   if (
//     diagonal1 !== 15 ||
//     diagonal2 !== 15 ||
//     diagonal3 !== 15 ||
//     diagonal4 !== 15 ||
//     diagonal5 !== 15 ||
//     diagonal6 !== 15 ||
//     diagonal7 !== 15 ||
//     diagonal8 !== 15
//   ) {
//     return false;
//   }
//   return true;
// }




