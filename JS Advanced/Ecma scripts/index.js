//Exercise 1

let user = {
    name: "John",
    years: 30
  }
// const name = user.name;
// const age = user.age;
// const isAdmin = user.isAdmin;
const { name, age, isAdmin } = user;

//Exercise 2

var planetName = "Mars"; 
var currentVisitorName = "Daria"; 

//Exercise 3
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi() //Hello John output in an alert.

//Exercise 4
let newUser = {};
user.name = "John";      
user.surname = "Smith"; 
user.name = "Pete";  
delete user.name;

//Exercise 5//

const myUser = {
    name: "John"
  }
  myUser.name = "Pete"
  console.log(myUser);
  //I am not reassigning the variable but modifying the property inside the object

  //Exercise 6
  let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }
  let sum = 0;
for (let total in salaries) {
  if (salaries.hasOwnProperty(total)) {//has Own property = sum values that belong directly to the salaries object
    sum += salaries[total];
  }
}
console.log(sum);

//Exercise 7
let a = 1;
let b = 2;
if (a + b < 4) {
    result = 'Below';
  } else {
    result = 'Over';
  }
result = a + b < 4 ? 'Below' : 'Over';
console.log(result);

//Exercise 8

let myMessage;
let login = 'Employee'
if (login == 'Employee') {
  myMessage = 'Hello';
} else if (login == 'Director') {
  myMessage = 'Greetings';
} else if (login == '') {
  myMessage = 'No login';
} else {
  myNessage = '';
}


let message = login == 'Employee' ? 'Hello' :
              login == 'Director' ? 'Greetings' :
              login == ''         ? 'No login' :
                                    '';