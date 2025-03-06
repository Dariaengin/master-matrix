// Exercise 1 - Classes
//create The Person class with name and age properties
//introduce() method returns a formatted introduction string
class Person {//class definition
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        const greetings = "Hi";
        
        return `${greetings}, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Exercise 2 - this keyword
// create instance of Person
//create function that takes a callback and calls it using .call(person), ensuring this refers to person
const person1 = new Person("John", 25);//usage of class
const person2 = new Person('Berkay', 30)

//definition of describePerson function
function describePerson(callback) {
    callback.call(person1);//body of function, i am calling here callback function with call method
}
describePerson(
    function() {
    console.log(this.introduce());
}
)
//while using a function ı give variable as parameter


// Exercise 3 - Promises
//create The wait(ms) function that returns a Promise that resolves after ms milliseconds using setTimeout.
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Resolved after ${ms} ms`), ms);
    });
}

wait(2000).then(console.log);
