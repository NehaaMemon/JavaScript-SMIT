

//using JS template notation
let studentNames = [];

//using JS object notation
let student = new Array();

//string Array
let stringsArray = ["Ali", "Ayesha", "Ahmed", "Sara"];


//number array
let numbersArray = [10, 20, 30, 40, 50];

//bool array
let bool = [true,false];

//mix array
let mixArray = ["sana",12,true];

//Education Qualifications Array
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
 for (let i = 0; i < qualifications.length; i++) {
      document.write((i + 1)+ ") " +   qualifications[i] +" <br>");
    }
    
//scores & percentages of students
let stdarray = ["sana","amna","riya"];
let mark = [450,320,440];
let totalMarks = 500;

for(let i = 0; i < stdarray.length; i++){
   let percentage = (mark[i] / totalMarks) * 100;
    document.write("Score of " + stdarray[i] + " is " + mark[i] + ".Percentage is " + percentage + "%<br>")
}

 function showArray(arr){
        for(let i = 0; i < arr.length; i++){
            document.write(arr[i] + "<br>");
        }
    }

    // Original Array
    let colorArray = ["red","blue"];
    document.write("<h3>Original Array:</h3>");
    showArray(colorArray);

    // (a) Add color in the beginning
    let user = prompt("Which color you want to add in the beginning?");
    colorArray.splice(0, 0, user);
    document.write("<h3>Updated Array (Added at Beginning):</h3>");
    showArray(colorArray);

    // (b) Add color in the end
    let users = prompt("Which color you want to add at the end?");
    colorArray.push(users);
    document.write("<h3>Updated Array (Added at End):</h3>");
    showArray(colorArray);

    // (c) Add two more colors at the beginning
    colorArray.unshift("yellow", "green");
    document.write("<h3>Updated Array (Added two colors at Beginning):</h3>");
    showArray(colorArray);

    // (d)
    colorArray.shift();
    document.write("<h3>Updated Array (Deleted First Color):</h3>");
    showArray(colorArray);

    // (e) 
    colorArray.pop();
    document.write("<h3>Updated Array (Deleted Last Color):</h3>");
    showArray(colorArray);

    // (f) 
    let indexAdd = prompt("At which index you want to add a color?");
    let colorAdd = prompt("Enter color name to add:");
    colorArray.splice(indexAdd, 0, colorAdd);
    document.write("<h3>Updated Array (Color Added at Index " + indexAdd + "):</h3>");
    showArray(colorArray);

    // (g) 
    let indexDel = prompt("At which index you want to delete color(s)?");
    let howMany = prompt("How many colors you want to delete?");
    colorArray.splice(indexDel, howMany);
    document.write("<h3>Updated Array (Deleted " + howMany + " color(s) from Index " + indexDel + "):</h3>");
    showArray(colorArray);


  let scores = [320, 230, 480, 120];
scores.sort();
document.write(scores);


   let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
  let selectedCities = cities.slice(1, 4); 

  document.write("<h3>Cities List:</h3>" + cities + "<br>");
  document.write("<h3>Selected Cities List:</h3>" + selectedCities);

   var arr = ["This ", " is ", " my ", " cat"];
  let singleString = arr.join(""); 

  document.write("<h3>Array:</h3>" + arr + "<br>");
  document.write("<h3>String:</h3>" + singleString);

   let fifoArray = [];

  fifoArray.push("Keyboard");
  fifoArray.push("Mouse");
  fifoArray.push("Printer");
  fifoArray.push("Monitor");

  document.write("<h3>Devices:</h3>" + fifoArray + "<br><br>");

  document.write("Out: " + fifoArray.shift() + "<br>");
  document.write("Out: " + fifoArray.shift() + "<br>");
  document.write("Out: " + fifoArray.shift() + "<br>");
  document.write("Out: " + fifoArray.shift() + "<br>");

  let lifoArray = [];

  lifoArray.push("Keyboard");
  lifoArray.push("Mouse");
  lifoArray.push("Printer");
  lifoArray.push("Monitor");

  document.write("<h3>Devices:</h3>" + lifoArray + "<br><br>");

  document.write("Out: " + lifoArray.pop() + "<br>");
  document.write("Out: " + lifoArray.pop() + "<br>");
  document.write("Out: " + lifoArray.pop() + "<br>");
  document.write("Out: " + lifoArray.pop() + "<br>");


  let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

  document.write("<h3>Select Phone Manufacturer:</h3>");
  document.write("<select>");

  for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
  }

  document.write("</select>");



