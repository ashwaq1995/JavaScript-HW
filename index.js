//JavaScript Homework


// Calculate area of a rectangle

// Store the length of rectangle.
// Store the width of rectangle.
// Calculate the area and print the output "The area of the rectangle is: NN"
// The Temperature Converter
// -------------------------------------------------------------------

function getRectangleArea(length, width) {
  return length*width;
}

let area = getRectangleArea(4,5);

console.log("The area of your rectangle is " + area);

// -------------------------------------------------------------------
// -------------------------------------------------------------------

//The Temperature Converter

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
// -------------------------------------------------------------------

function celsiusToFahrenheit(celsius) {
var celsiusInF = (celsius * 9) / 5 + 32;
console.log(celsius + "°C is " + celsiusInF + "°F");
}

function fahrenheitToCelsius(fahrenheit) {
var fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
console.log(fahrenheit + "°F is " + fahrenheitInC + "°C");
}


celsiusToFahrenheit(60);
fahrenheitToCelsius(45);

// -------------------------------------------------------------------
// -------------------------------------------------------------------

// Numbers' summations
// Loop though this array let Numbers = [23,54,32,87,47] and print the sum of all numbers
// -------------------------------------------------------------------

var Numbers = [23,54,32,87,47];
for (var i = 0, sumNumber = 0; i < Numbers.length; sumNumber += Numbers[i++]);

console.log(sumNumber)

// -------------------------------------------------------------------
// -------------------------------------------------------------------

//another way

const listNumbers = [23,54,32,87,47];
let sum = 0;

for (let i = 0; i < listNumbers.length; i++) {
  sum += listNumbers[i];
}
console.log(sum);

// -------------------------------------------------------------------
// -------------------------------------------------------------------

// Maximum number
// Create an array of the following numbers [16,4,2,0,19,6]
// Loop through the array elements and print the maximum number of this list to the console.
// -------------------------------------------------------------------

var maxNumbers = [16,4,2,0,19,6];
var max = maxNumbers[0];
for (var i = 1; i < maxNumbers.length; i++) {
if (maxNumbers[i] > max) {
  max = maxNumbers[i];
}
}
console.log("Max is: " + max);

// -------------------------------------------------------------------
// -------------------------------------------------------------------

// Reverse Array
// Create an array of the following numbers [1,2,3,4,5,6,7,8,9,10]
// print the array in a reverse order

// -------------------------------------------------------------------

var arrayNumbers = [1,2,3,4,5,6,7,8,9,10];
var revNumber = arrayNumbers.reverse();
console.log("revNumber", revNumber);

// ------------------------------------------------------------------- 
// ------------------------------------------------------------------- 


// stars pattern
// Declare a variable and assign a number to it.
// Print a right angle triangle using stars to the console. 
// ------------------------------------------------------------------- 

let n = 10;
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    process.stdout.write(' ');
  }
  // printing star
  for (let k = 0; k < i; k++) {
    process.stdout.write('*');
  }
  console.log();
}


// ------------------------------------------------------------------- 
// ------------------------------------------------------------------- 

