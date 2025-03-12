// Find the word to replace (before) in the sentence (str).
// Check if the first letter of before is uppercase.
// If uppercase, convert the first letter of after to uppercase.
// If lowercase, keep after as it is.
// Replace before with after in the sentence.
// Return the modified sentence.



function myReplace(str, before, after) {
    // Check if the first letter of before is uppercase
    if (before[0] === before[0].toUpperCase()) {
      after = after[0].toUpperCase() + after.slice(1); // Capitalize after//Slice Extracts the rest of the word without modifying it.
    } else {
      after = after[0].toLowerCase() + after.slice(1); // Keep lowercase
    }
  
    // Replace before with after
    return str.replace(before, after);
  }
  // before     after                 Output    
// jumped    j=lowercase So l       leaped          

  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  // Output: "A quick brown fox leaped over the lazy dog"
  
  console.log(myReplace("This is a Book", "Book", "dog"));
  // Output: "This is a Dog"

  //using split function

  const replaceWord = (str, before, after) => {
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === before) {
        strArr[i] = after;
      }
      str = strArr.join(' ');
    }
    return str;
  };
  
  console.log(
    replaceWord('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
  ); // A quick brown fox leaped over the lazy dog
  
  console.log(
    replaceWord('A quick brown fox jumped over the lazy dog', 'brown', 'red')
  ); // A quick red fox jumped over the lazy dog
  
//define the function using 3 parameters
//transform string to an array using string method
//for loop to check the array
//condition to check if given word has a match in the array
//check if the first letter is capital. İF true replace the word with capital letter. 
// //İf false replace the word wih low letter
//return a string using array
let st= 'A quick brown fox jumped over the lazy dog'
st.toUpperCase
function searchAndReplace (str, before, after){
    let array=String.trim().split(' ')
    for (let i=0; i<array.length; i++){
        if (Arr[i].toLowerCase() === before.toLowerCase()) {
            if(arr[i][0]==arr[i][0].toUpperCase()){
                (arr[i][0]==arr[i][0].toUpperCase()+after.slice(1))
            }
        }
    }
        

}