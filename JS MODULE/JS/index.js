//1 - Variables and Conditionals:
let myAge = 31;

if (myAge >= 18) {
  console.log("You can vote.");
} else {
  console.log("You can not vote.");
}
const userName = prompt("Enter your name:");

if (userName === "John") {
  console.log("Hello, John!");
} else {
  console.log("You are not John.");
}

//2 - Functions:
//   Write a function that takes two numbers as parameters and returns their sum. 
function add(x, y) {
  return x + y;
}
console.log(add(10, 7));


//function that accepts a string as a parameter and returns the string reversed.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

//array
const favoriteFruits = ["Pineapple", "Raspbery", "Kiwi", "Strawberry", "Blackberry"];

for (let i = 0; i < favoriteFruits.length; i++) {
  console.log(favoriteFruits[i]);
}
//const numberOfFruits = favoriteFruits.length; 
//console.log(favoriteFruits);

//an array of numbers as a parameter and returns the average
let total = 0;
let grades = [3, 5, 7, 9, 11];
for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}
let avg = total / grades.length;
console.log(avg)


//find and log the largest number in the array
const numbers = [3, 5, 7, 9, 11, 13, 15];
let largest = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i]; //assign the value of numbers to variable. Equality is == or!!!!!
  }
}
console.log("Largest number:", largest);

//construct a sentence by concatenating
const words = ["Daria", "is", "a", "good", "programmer"];
let sentence = "";
for (let i = 0; i < words.length; i++) {
  sentence += words[i] + " ";
}
console.log(sentence.trim() + "!");
//check if the given name exists in the array and return true or false.
const names = ["Daria", "Berkay", "Gunes", "Cantekin"];
let namesExist = "";
for (let i = 0; i < names.length; i++) {
  namesExist += names[i] + " ";
}

//function check if the given name exists in the array and return true or false.
function nameExists(names, name) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === name) {
      return true;
    }
  }
  return false;
}

console.log(nameExists(["Daria", "Berkay", "Gunes"], "Berkay"));
console.log(nameExists(["Daria", "Berkay", "Gunes"], "Cantekin"));


const evenNumbers = [];
//array of even numbers from 1 to 20 using a `for` loop and the `if` statement.
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    evenNumbers.push(i);
  }
}
console.log(evenNumbers);

//objects task
const myPerson = {
  name: "Daria",
  age: 31,
  city: "Rotterdam",
};

for (const key in myPerson) {
  console.log(key, myPerson[key]);
}
const book = {
  name: "Anne of Greengables",
  author: "Lucy M. Montgomery",
  year: "1908",
};

for (const key in book) {
  console.log(key, book[key]);
}
//Objects as Classes

class Car {
  constructor() {
    this.make = "Mercedes";
    this.model = "EQS SUV";
    this.year = 2022;
  }

  start() {
    console.log(`${this.make} ${this.model} is starting...`);
  }
}

//instance of the Car class
const car1 = new Car(); //Class constructor Car cannot be invoked without 'new'

car1.start();

// Access properties of car1
console.log(car1.make);
console.log(car1.model);

class Car2 {
  constructor() {
    this.make = "Mercedes";
    this.model = "EQS SUV";
    this.year = 2022;
  }

  start() {
    console.log(`${this.make} ${this.model} is starting...`);
  }

  drive() {
    console.log(`${this.make} ${this.model} is driving...`);
  }
}
const car3 = new Car2();
car3.start();
car3.drive();

//6- Window Object:
const showAlert = prompt("Alert! Enter YES to show details");
if (userName === "John") {
  console.log("Hello! I am an alert box!!");
}
const yourUserName = prompt("Enter your name:");

if (yourUserName === "Max") {
  console.log("Hello, Max!");
}
alert("Hello Max!");

//7- DOM Manipulation:
function changeText() {
  document.getElementById("textLorem").textContent = "Dummy text";
}
function addItem() {
  const myList = document.createElement("li");
  myList.textContent = "one more task";
  document.getElementById("todoList").append(myList);
}
function changeImage() {
  const img = document.getElementById("myImage");


  if (img.src.includes("class.jpg")) {
    img.src = "class.jpg";
  } else {
    img.src = "image.jpg";
  }
}
document.getElementById("loginForm").addEventListener("submit", function () { 

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("yourMessage");

  if (username === "" || password === "") {
    message.style.color = "red";
    message.textContent = "Username and password cannot be empty!";
  } else if (password.length < 6) {
    message.style.color = "red";
    message.textContent = "Password must be at least 6 characters long!";
  } else if (username === "daria" && password === "000000") {
    message.style.color = "green";
    message.textContent = "Login successful! Welcome, ";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password!";
  }
});