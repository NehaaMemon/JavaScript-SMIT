let multiArray = [[], [], []];  
// 3 empty arrays inside main array
let matrixarray = [
[1,2,3,4],
[0,2,2,1],
[2,1,3,2]
];

for(let i = 0; i < matrixarray.length; i++){
    document.write(matrixarray[i].join(" ") +"<br>");
}

for (let i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

//4
let table = prompt("Enter a number for multiplication table:");
let tableLength = prompt("Enter length of the table:");

document.write("<h3>Multiplication Table of " + table + "</h3>");

for (let i = 1; i <= tableLength; i++) {
  document.write(table + " x " + i + " = " + (table * i) + "<br>");
}


//5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

//6
// a.
document.write("<h3>Counting:</h3>");
for (let i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

// b. g
document.write("<h3>Reverse Counting:</h3>");
for (let i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

// c.
document.write("<h3>Even:</h3>");
for (let i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

// d.
document.write("<h3>Odd:</h3>");
for (let i = 1; i < 20; i += 2) {
  document.write(i + ", ");
}

// e. 
document.write("<h3>Series:</h3>");
for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}

//7
let a = ["cake","pineapple","cookie","pastry"];
let u = prompt("Welcome to ABC bakery .what you want");
let found = false;
for(let i = 0 ; i< a.length; i++){
if(u == a[i]){
    document.write("<h1>Your product is available at index " + i + "</h1>");
   found = true;
        break; // loop yahin ruk jayegi
    }
}

if(!found){
    document.write("<h3>Sorry! Your product is not available</h3>");
}


//8
let A = [24, 53, 78, 91, 12];
let ma = Math.max(...A);
document.write("<h2>Largest value is " +  ma +" </h2>")


//9
let b = [24, 53, 78, 91, 12];
let mi = Math.min(...b);
document.write("<h2>Smallest value is " +  mi +" </h2>")


//10
let n =5;
for(let i = 0; i <=100; i+=5){
    document.write(i +"<br>");
}