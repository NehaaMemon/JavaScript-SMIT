var city = prompt("Which city you belong");
if (city.toLowerCase() == "karachi")
    document.write("Welcome to city of lights<br>");

var gender = prompt("Are You male or female");
if (gender.toLowerCase() == "male")
    document.write("Good Morning Sir.<br>");
else if (gender.toLowerCase() == "female")
    document.write("Good Morning Ma’am.<br>");
else
    document.write("Good Morning.<br>");

var signal = prompt("Which light is showing on signal?");

if (signal.toLowerCase() == "red") {
    document.write("Must Stop<br>");
}
else if (signal.toLowerCase() == "green") {
    document.write("Move now<br>");
}
else if (signal.toLowerCase() == "yellow") {
    document.write("Ready to go<br>");
}
else {
    document.write("Invalid signal color<br>");
}


var fuel = parseFloat(prompt("How much fuel in car?(in litre)"));
if(fuel <= 0.25){
     document.write("Please refill the fuel in your car<br>");
}


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
alert("car is smaller than cat");
 }