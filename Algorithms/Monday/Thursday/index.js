// define a function with a parameter of string
// converts all characters of the string to lowerCase to make the palindrom insensitive and put them in a new variable
// define a empty string to store the reversed version of the string
// loop through the string from the last index back to  index 0 to reverse the string
//  compare the reversed string with the original string;
// if they are equal return true , otherwise false;

function palindrome(string) {
    let st = string.split('').join('').toLowerCase()
    for (let i = 0; i < st.length/2; i++) {
        if (st[i]!= st[st.length - 1 - i]) { return false }
    }
    return true
}
console.log(palindrome('helleh'))

function palindromChecker(str) {
    const checkString =str.split(" ").join("").toLowerCase();
    let reversedString = "";
    for (let i = checkString.length - 1; i >= 0; i--){
        reversedString += checkString[i];
    }
    return reversedString === checkString;
}


console.log(palindromChecker("drop"));
console.log(palindromChecker("madam"));

