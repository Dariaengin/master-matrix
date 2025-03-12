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
  