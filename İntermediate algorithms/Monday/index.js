//Largest Number in Arrays
function largestOfFour(arr) {
    return arr;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  //Returns [5,27,39,1001]


  //define a function that takes array as a parameter
  //define a variable
  //define an empty array
  //for loop to run inside the array
  //for loop for each sub array

  function largestSum(arr){
    let x=[]
    for(let i=0;i<arr.length; i++ ){
        x.push(arr[i][0])
        for(let j=0; j<arr[j].lenth; j++){
            if(x[i]<arr[i][j]){
                x[i]=arr[i][j]
            }

        }
    }return x

  }
  let array=[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
  console.log(largestSum(array))