//Declare a function factorialize(n) that takes an integer as an input and returns the factorial of the provided integer.

//define a function takes number as a parameter
//define a variable represent the multiple of numbers
//for loop start at 1 and at the givin number
//assign the result
//return the variable
function factorialize (num) 
{
    let factor=1
    for(let i=1; i<=num; i++ ){
        factor *=i
    }
     return factor
} console.log(factorialize(5))

function getName(name){
    console.log(name)
}
var setName=(name)=>{
   return name;
}
setName();

function checkIfLoggedIn(email, pass) {
    if (email === "daria" && pass === "10") { 
        return "user logged in";
    } else { 
        return "user is not correct";
    }
}

let userOne = checkIfLoggedIn("daria", "10");
let userTwo = checkIfLoggedIn("berkay", "20");

console.log(userOne); 
console.log(userTwo); 
