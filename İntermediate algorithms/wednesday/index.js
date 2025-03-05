
//function (Return string with the first letter of each word capitalized.)
//function that returns a string
//define a variable, define an array
//change first letter of every array element to capital (to uppercase, to slice)
//return the result in a string

let string='sHoRt AnD sToUt'

function TitleCase (st){
    let arr=st.toLowerCase().split(" ")
    for(let i=0; i>arr.length; i++){
        arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1)
    }return arr.join(' ')
}
console.log(TitleCase(string))




// class User {//first method that works after creating user
//     constructor(firstName, lastName, yearOfBirth, email) {
//         this.firstName = firstName,//setting the property
//         this.lastName = lastName,
//         this.yearOfBirth = yearOfBirth,
//         this.email = email
//     }

//     getFullName = () => {//method turns data to string. name and surname are given to user 
//         return `${this.firstName} ${this.lastName}`;
//     }

//     getAge = () => {//method
//         return 2025 - Number(this.yearOfBirth);
//     }
// }
// let newUser = new User("hans", "andere", 1997, "hans@email.com");//create new user ,all parameters go to constructor method

// newUser.getFullName();
// console.log(newUser.getAge());
// console.log(newUser.getFullName());

// let user = [//data model
//     //name and age are properties.
//     {name: "user 1", age: 40},
//     {name: "user 2", age: 29 },
//     {name: "user 3", age: 34 }
// ]
// const allUsers = document.getElementById("users-all");

// let userPromise = new Promise((resolve, reject) => {
//     let data = user;

//     setTimeout(() => {
//         if(data.length > 0) {
//             resolve(data);
//         } else {
//             reject("user is empty")
//         }
//     }, 5000);

    
// })

// userPromise
//     .then( result => {
//         result.forEach( user => {
//             let newUserDiv = document.createElement("li");
//             newUserDiv.innerText = `Name: ${user.name} ... Age: ${user.age}`;
//             allUsers.appendChild(newUserDiv);
//         })
//     })
//     .catch( err => {
//         let errMsg = document.createElement("p");
//         errMsg.innerText = err;
//         allUsers.appendChild(errMsg);
//     })



// console.log("100");
// console.log("object");

// function x(a, b) {
//     return(`a:${a}, b:${b}`)
// }

// console.log(x("Male", "Female"));
// console.log(x("A", "B"));
// console.log(x(5, 7));