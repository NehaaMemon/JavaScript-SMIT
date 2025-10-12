// var a =10;
// document.write("the value of a is " + a +" <br> ");
// document.write("----------------  <br> " );
// ++a
// document.write("the value of ++a is " + a +" <br> ");
// document.write("---------------- <br>  " );
// a++
// document.write("the value of a++ is " + a +" <br> ");


// document.write("---------------- <br>  " );

// --a
// document.write("the value of --a is " + a +" <br> " );

// document.write("----------------  <br> " );

// a--
// document.write("the value of a-- is " + a +" <br> ");


 var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    /*
      var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    /*
      Step-by-step explanation:
      --a;        a = 1
      --a - --b;  1 - 0 = 1
      --a - --b + ++b; 1 - 0 + 1 = 2
      --a - --b + ++b + b--; 1 - 0 + 1 + 1 = 3
      Final values:
        a = 1
        b = 0 (after post-decrement)
        result = 3
    */
    document.write("<h3>Question 2:</h3>");
    document.write("a = " + a + "<br>");
    document.write("b = " + b + "<br>");
    document.write("result = " + result + "<hr>");

    // ===== Question 3 =====
    var userName = prompt("Enter your name:");
    alert("Hello, " + userName + "! Welcome to JavaScript practice.");
    document.write("<h3>Question 3:</h3>");
    document.write("Greeting displayed for user: " + userName + "<hr>");

    // ===== Question 5 =====
    var num = +prompt("Enter a number to display its multiplication table:", 5);
    document.write("<h3>Question 5: Multiplication Table of " + num + "</h3>");
    for (var i = 1; i <= 10; i++) {
      document.write(num + " x " + i + " = " + (num * i) + "<br>");
    }
    document.write("<hr>");

    // ===== Question 6 =====
    var sub1 = prompt("Enter first subject name:");
    var sub2 = prompt("Enter second subject name:");
    var sub3 = prompt("Enter third subject name:");
    var totalMarksEach = 100;

    var obt1 = prompt("Enter obtained marks for " + sub1 + ":");
    var obt2 = prompt("Enter obtained marks for " + sub2 + ":");
    var obt3 = prompt("Enter obtained marks for " + sub3 + ":");

    var totalMarks = totalMarksEach * 3;
    var obtainedMarks = obt1 + obt2 + obt3;
    var percentage = (obtainedMarks / totalMarks) * 100;

    document.write("<h3>Question 6: Marks Sheet</h3>");
    document.write("<table border='1' cellpadding='5'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
    document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksEach + "</td><td>" + obt1 + "</td><td>" + ((obt1 / totalMarksEach) * 100).toFixed(2) + "%</td></tr>");
    document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksEach + "</td><td>" + obt2 + "</td><td>" + ((obt2 / totalMarksEach) * 100).toFixed(2) + "%</td></tr>");
    document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksEach + "</td><td>" + obt3 + "</td><td>" + ((obt3 / totalMarksEach) * 100).toFixed(2) + "%</td></tr>");
    document.write("</table><br>");
    document.write("<b>Total Marks:</b> " + totalMarks + "<br>");
    document.write("<b>Marks Obtained:</b> " + obtainedMarks + "<br>");
    document.write("<b>Overall Percentage:</b> " + percentage.toFixed(2) + "%<hr>");
    
    document.write("<h3>Question 2:</h3>");
    document.write("a = " + a + "<br>");
    document.write("b = " + b + "<br>");
    document.write("result = " + result + "<hr>");

    // ===== Question 3 =====
    var userName = prompt("Enter your name:");
    alert("Hello, " + userName + "! Welcome to JavaScript practice.");
    document.write("<h3>Question 3:</h3>");
    document.write("Greeting displayed for user: " + userName + "<hr>");

    // ===== Question 5 =====
    var num = +prompt("Enter a number to display its multiplication table:", 5);
    document.write("<h3>Question 5: Multiplication Table of " + num + "</h3>");
    for (var i = 1; i <= 10; i++) {
      document.write(num + " x " + i + " = " + (num * i) + "<br>");
    }
    document.write("<hr>");

    // ===== Question 6 =====
    var sub1 = prompt("Enter first subject name:");
    var sub2 = prompt("Enter second subject name:");
    var sub3 = prompt("Enter third subject name:");
    var totalMarksEach = 100;

    var obt1 = +prompt("Enter obtained marks for " + sub1 + ":");
    var obt2 = +prompt("Enter obtained marks for " + sub2 + ":");
    var obt3 = +prompt("Enter obtained marks for " + sub3 + ":");

    var totalMarks = totalMarksEach * 3;
    var obtainedMarks = obt1 + obt2 + obt3;
    var percentage = (obtainedMarks / totalMarks) * 100;

    document.write("<h3>Question 6: Marks Sheet</h3>");
    document.write("<table border='1' cellpadding='5'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
    document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksEach + "</td><td>" + obt1 + "</td><td>" + ((obt1 / totalMarksEach) * 100).toFixed(2) + "%</td></tr>");
    document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksEach + "</td><td>" + obt2 + "</td><td>" + ((obt2 / totalMarksEach) * 100).toFixed(2) + "%</td></tr>");
    document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksEach + "</td><td>" + obt3 + "</td><td>" + ((obt3 / totalMarksEach) * 100).toFixed(2) + "%</td></tr>");
    document.write("</table><br>");
    document.write("<b>Total Marks:</b> " + totalMarks + "<br>");
    document.write("<b>Marks Obtained:</b> " + obtainedMarks + "<br>");
    document.write("<b>Overall Percentage:</b> " + percentage.toFixed(2) + "%<hr>");
