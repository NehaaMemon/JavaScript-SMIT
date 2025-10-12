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


    var subject1 = +prompt("Enter marks obtained in Subject 1:");
    var subject2 = +prompt("Enter marks obtained in Subject 2:");
    var subject3 = prompt("Enter marks obtained in Subject 3:");
   var totalMarks = 300;

    var obtainedMarks = subject1 + subject2 + subject3;
    var percentage = (obtainedMarks / totalMarks) * 100;
    var grade, remarks;

    if (percentage >= 80) {
      grade = "A-one";
      remarks = "Excellent";
    } else if (percentage >= 70) {
      grade = "A";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "B";
      remarks = "You need to improve";
    } else {
      grade = "Fail";
      remarks = "Sorry";
    }

    document.write("<h3>Marks Sheet</h3>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + obtainedMarks + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
    document.write("Grade: " + grade + "<br>");
    document.write("Remarks: " + remarks + "<br><hr>");

    // Guess Game =====
    var secretNumber = 7; 
    var userGuess = +prompt("Guess the secret number (1-10):");

    if (userGuess === secretNumber) {
      alert("Bingo! Correct answer");
    } else if (userGuess + 1 === secretNumber) {
      alert("Close enough to the correct answer");
    } else {
      alert("Try again!");
    }

    // Divisible by 3
    var num = prompt("Enter a number to check if divisible by 3:");
    if (num % 3 === 0) {
      alert(num + " is divisible by 3.");
    } else {
      alert(num + " is not divisible by 3.");
    }

    //  Even or Odd
    var checkNum = prompt("Enter a number to check even or odd:");
    if (checkNum % 2 === 0) {
      alert(checkNum + " is an even number.");
    } else {
      alert(checkNum + " is an odd number.");
    }

    // Temperature Message
    var temp = prompt("Enter current temperature:");
    if (temp > 40) {
      alert("It is too hot outside.");
    } else if (temp > 30) {
      alert("The Weather today is Normal.");
    } else if (temp > 20) {
      alert("Today’s Weather is cool.");
    } else if (temp > 10) {
      alert("OMG! Today’s weather is so Cool.");
    } else {
      alert("It's freezing cold!");
    }

    //Simple Calculator 
    var firstNum = prompt("Enter first number:");
    var secondNum = prompt("Enter second number:");
    var operation = prompt("Enter operation (+, -, *, /, %):");
    var result;

    if (operation === "+") {
      result = firstNum + secondNum;
    } else if (operation === "-") {
      result = firstNum - secondNum;
    } else if (operation === "*") {
      result = firstNum * secondNum;
    } else if (operation === "/") {
      result = firstNum / secondNum;
    } else if (operation === "%") {
      result = firstNum % secondNum;
    } else {
      result = "Invalid operation!";
    }

    document.write("<h3>Calculator Result</h3>");
    document.write(firstNum + " " + operation + " " + secondNum + " = " + result)