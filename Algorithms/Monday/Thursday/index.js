// define a function with a parameter of string
// converts all characters of the string to lowerCase to make the palindrom insensitive and put them in a new variable
// define a empty string to store the reversed version of the string
// loop through the string from the last index back to  index 0 to reverse the string
//  compare the reversed string with the original string;
// if they are equal return true , otherwise false;

function palindrome(string) {
    let st = string.split(' ').join('').toLowerCase()//split transforms string into array, then join transform the array into string
    for (let i = 0; i < st.length/2; i++) {//compare half of the string
        if (st[i]!= st[st.length - 1 - i]) { return false }//index length - i - 1 (from the end).
    }
    return true
}
console.log(palindrome('helleh'))

function palindromChecker(str) {
    const string =str.split(" ").join("").toLowerCase();
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--){//Loops backwards through string
        reversedString += string[i];
    }
    return reversedString === string;
}


console.log(palindromChecker("drop"));
console.log(palindromChecker("madam"));

