console.log("Hello, World!");  // Write to the console (print)

// Variables
// Variables decalred outside functions and blocks have global scope (the whole program)
var myVariable; // Declared a variable (with function scope)
let myOtherVariable; // Declared a variable (with block scope (if, else, while, for, etc.))

// Assignment (Giving a variable a value)
myVariable = 1;
myOtherVariable = 2;

// Declaration and Assignment
var anotherVariable = 3;
let yetAnotherVariable = 4;
const MY_CONSTANT = 123;  // Declared & Assigned a constant (with function scope)

// Datatypes
var strings = "Hello, World!";
var integers = 123;
var floats = 123.456;
var booleans = false;

// Operators
// Arithmetic Operators
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(1 % 2);
console.log(++myVariable);    // Increase by 1 and print
console.log(myVariable++);    // print and increase by 1
console.log(--myVariable);    // Decrease by 1 and print
console.log(myVariable--);    // print and decrease by 1
// Assignment Operators
myVariable = 123; // Assign a value
myVariable += 5;  // Adds 5 from current value
myVariable -= 3;  // Subtracts 3 from current value
myVariable *= 2;  // Multiplys current value by 2
myVariable /= 4;  // Divides current value by 4
myVariable %= 10; // Sets to the remaind of the current value when divided by 10.
// Comparison Operators
console.log(1 == "1.0"); // Equal to (compares between datatypes)
console.log(1 === "1.0");  // Strict equality (= = =) (numbers and strings are not strictly equal)
console.log(1 === 1.0);    // Strict equality (numbers int and float are strictly equal)
console.log(1 === 2); 
console.log(1 != "1.0"); // Not equal to (! =)
console.log(1 !== "1.0");  // Not striclty equal to (! = =)
console.log(5 > 1);    // Greater Than
console.log(5 >= 5);   // Greater than or equal to (> =)
console.log(1 < 5);    // Less than
console.log(1 <= 5);   // Less than or equal to (< =)
// Logical Operators
console.log("Logical Operators")
console.log(!false);  // Logical NOT (!true = false, !false = true)
console.log(false || true); // Logical OR (one must be true)
console.log(false && true); // Logical AND (all must be true)

// Selection Statements
var a = 10;
var b = 20;
// If Statements
if (a == b) {
  console.log(a + " == " + b)
}
else if (a > b) {
  console.log(a + " > " + b)
}
// Any addition elseifs go here
// You do not need to have any else ifs
// Elses are optional, but must come at the end
else {
  console.log(a + " < " + b)
}
// Switch Case Statements
switch (a) {
  case 1:
    console.log("a is 1");
    break;
  case 10:
  case 20:
    console.log("a is 10 or 20");
    break;  // Must be included to exit the switch after this is ran. Try commenting the line out
  default:
    console.log("a is not 1 or 10");
    break;
}

// Iteration (Loops)
// Change the counters to a number >= 3 to see the difference between while and dowhile
// While Loop (Pre-Check Condtion Loop) (Runs 0 or many times)
console.log("While");
var counter = 0;
while (counter < 3) {
  console.log(counter);
  counter++;
}
// Do While Loop (Post-Check Condition Loop) (Runs 1 or many times)
console.log("Do While");
var counter = 0;
do {
  console.log(counter);
  counter++;
} while (counter < 3)
// For
console.log("For");
// Counter; Condition; Change in Counter;
for (var counter = 0; counter < 3; counter++) {
  console.log(counter);
}
// break (Also works on while and do whiles)
console.log("Break Demo")
for (var counter = 0; counter < 10; counter++) {
  if (counter == 5){
    break;
  }
  console.log(counter);
}
// continue (Also works on while and do whiles)
console.log("Continue Demo")
for (var counter = 0; counter < 10; counter++) {
  if (counter == 5){
    continue;
  }
  console.log(counter);
}

// Arrays
// Declaring and Assigning
var myArray = [1, 2, 3];
console.log(myArray);
myArray = [1, 1.0, "Hello", true]
console.log(myArray);

// Accessing values
console.log(myArray[2]);
// Changing values
myArray[1] = 2.5;
console.log(myArray);
// Add to end
myArray.push("Test", 123);
console.log(myArray);
// Add to specific position
// Start, remove this many, values to add in...
myArray.splice(2, 0, "More Values", 987);
console.log(myArray);
// Remove from specific position
myArray.splice(3, 1);
console.log(myArray);

// Error Handling
try {
  // Code to run
  console.log(aVariableThatDoesntExist);
}
catch (error) {
  console.log(error.message);
}
// Throw errors (Covered in detail later) Commented to stop crashing
// throw "My error";
try {
  // Code to run
  console.log(aVariableThatDoesntExist);
}
// Try commenting out catch block to see finally in the other case
catch (error) {
  console.log(error.message);
}
finally {
  console.log("This runs regardless");
}

// Function Declaration
function myFunction() {
  console.log("You ran myFunction");
}

// Function Call
myFunction();

// Functions with Args
function myFunction2(number) {
  console.log("You provided the value " + number)
}

myFunction2();    // No args will count as "undefined" not a crash
myFunction2(12);

// Functions that return
function myReturningFunction() {
  return 47;
}
var returnedValue = myReturningFunction();
console.log(returnedValue);

// Variables will not be affected by changes
function increment(number) {
  number++;
}
myNumber = 50;
console.log(myNumber)
increment(myNumber)
console.log(myNumber)

function changeArray(arr) {
  arr[0] = 321;
}
array = [1, 2, 3]
console.log(array)
changeArray(array)
console.log(array)