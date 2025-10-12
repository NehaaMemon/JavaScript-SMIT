var input = prompt("Enter a charater(number or letter)");
var charCode = input.charCodeAt(0);
if (charCode >= 48 && charCode <= 57) {
      alert("Input is a number.");
    } else if (charCode >= 65 && charCode <= 90) {
      alert("Input is an uppercase letter.");
    } else if (charCode >= 97 && charCode <= 122) {
      alert("Input is a lowercase letter.");
    } else {
      alert("Invalid input!");
    }

    document.write("<h3>Q1: Character Check</h3>");
    document.write("Input: " + input + "<br>Character Code: " + charCode + "<hr>");

    // ===== Q2 =====
    var num1 = prompt("Enter first integer:");
    var num2 = prompt("Enter second integer:");
    if (num1 > num2) {
      alert(num1 + " is larger.");
    } else if (num2 > num1) {
      alert(num2 + " is larger.");
    } else {
      alert("Both numbers are equal.");
    }

    // ===== Q3 =====
    var num = prompt("Enter a number:");
    if (num > 0) {
      alert("Number is positive.");
    } else if (num < 0) {
      alert("Number is negative.");
    } else {
      alert("Number is zero.");
    }

    // ===== Q4 =====
    var char = prompt("Enter a single character to check if it's a vowel:");
    var lowerChar = char.toLowerCase();
    if (lowerChar === "a" || lowerChar === "e" || lowerChar === "i" || lowerChar === "o" || lowerChar === "u") {
      alert("True: It is a vowel.");
    } else {
      alert("False: It is not a vowel.");
    }

    // ===== Q5 =====
    var correctPassword = "javascript123";
    var userPassword = prompt("Enter your password:");
    if (!userPassword) {
      alert("Please enter your password.");
    } else if (userPassword === correctPassword) {
      alert("Correct! The password you entered matches the original password.");
    } else {
      alert("Incorrect password.");
    }

    // ===== Q6 ===== (Fix the error)
    var greeting;
    var hour = 13;
    if (hour < 18) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    alert(greeting);

    // ===== Q7 =====
    var time = +prompt("Enter time in 24-hour format (e.g. 1900):");
    if (time >= 0 && time < 1200) {
      alert("Good Morning!");
    } else if (time >= 1200 && time < 1700) {
      alert("Good Afternoon!");
    } else if (time >= 1700 && time < 2100) {
      alert("Good Evening!");
    } else if (time >= 2100 && time <= 2359) {
      alert("Good Night!");
    } else {
      alert("Invalid time format.");
    }