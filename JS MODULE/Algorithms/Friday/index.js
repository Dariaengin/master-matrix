//Firday: 3rd Highest Number in Array

const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];

let first = 0;
let second = 0;
let third = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
        third = second
        second = first
        first = arr[i]
    } else if (arr[i] > second) {
        third = second
        second = arr[i]
    } else if (arr[i] > third) {
        third = arr[i]  }
}

//input for dom
const element = document.getElementById("btnAdd");

element.addEventListener("click", myFunction);

function myFunction() {
    console.log('Helloooo!');
    document.getElementById("btnAdd").style.color = "coral";
    var table = document.getElementById("mytable");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var row = table.insertRow(tbodyRowCount + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = document.getElementById("first_name").value;
    cell2.innerHTML = document.getElementById("email").value;
    cell3.innerHTML = document.getElementById("age").value;
}

const buttonClean = document.getElementById("btnClean");
buttonClean.addEventListener("click", clean);

function clean(){
    var table = document.getElementById("mytable");
    var tbodyRowCount = table.tBodies[0].rows.length;
    for (let index = 0; index < tbodyRowCount; index++) {
        table.tBodies[0].deleteRow(0);
    }
    
}