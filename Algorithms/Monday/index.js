for (let i = 1; i <= 135; i++) {
    console.log(i);
}
for (let i = 1; i <= 135; i++)
    if(i %2 !== 0) {
    console.log(i);
}
let sum = 0;

for (let i = 0; i <= 135; i++) {
    sum += i;
    console.log(`Number is: ${i} Sum: ${sum}`);
}
let x = [1.4, 2, 12]
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}

// function findMax(arr) {
//     let max = arr[0]; 
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
  
//   const a = [2, -3, -1, 5, 0];
//   console.log(findMax(a));

let d =  [2, -3, -1, 5, 0];
let max = 0;
for (let i = 0; i < d.length; i++)
{
    if(max<d[i]){
        max=d[i]
    }
} console.log(max)
  
let X = [2, 1, 3]
function averageArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
     sum = array[1] + sum
    let average = 0
    average = sum / array.length 
    return average;
    }
}
console.log(averageArray(X))

function replaceNegatives(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        arr[i] = 0;
      }
    }
    return arr;
  }
  
  const b = [2, -1, 4, -3];
  const result = replaceNegatives(b);
  
  console.log(result);

  function NegativeIntoString(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        arr[i] = 'Turing';
      }
    }
    return arr;
  }
  
  const c = [1, -4, 0, -1];
  const newResult = NegativeIntoString(c);
  
  console.log(newResult);