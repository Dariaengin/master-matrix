// Exercise 1 - Classes
//create The Person class with name and age properties
//introduce() method returns a formatted introduction string
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Exercise 2 - this keyword
// create instance of Person
//create function that takes a callback and calls it using .call(person1), ensuring this refers to person1
const person1 = new Person("John", 25);

function describePerson(callback) {
    callback.call(person1);
}
describePerson(function() {
    console.log(this.introduce());
});

// Exercise 3 - Promises
//create The wait(ms) function that returns a Promise that resolves after ms milliseconds using setTimeout.
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Resolved after ${ms} ms`), ms);
    });
}

wait(2000).then(console.log);
