// add two numbers using the + operator
function addNumbers() {
    var num1 = 5;
    var num2 = 3;
    var result = num1 + num2; // Perform addition
    document.getElementById("addResult").innerHTML = "Addition: " + result; // Display result
}

// subtract two numbers using the - operator
function subtractNumbers() {
    var num1 = 5;
    var num2 = 3;
    var result = num1 - num2; // Perform subtraction
    document.getElementById("subtractResult").innerHTML = "Subtraction: " + result; // Display result
}

// multiply two numbers using the * operator
function multiplyNumbers() {
    var num1 = 5;
    var num2 = 3;
    var result = num1 * num2; // Perform multiplication
    document.getElementById("multiplyResult").innerHTML = "Multiplication: " + result; // Display result
}

//  calculate modulus (remainder) using the % operator
function modulusNumbers() {
    var num1 = 10;
    var num2 = 3;
    var result = num1 % num2; // Perform modulus operation (remainder of 10/3)
    document.getElementById("modulusResult").innerHTML = "Modulus: " + result; // Display result
}

// increment a number using the ++ operator
function incrementNumber() {
    var num = 5;
    num++; // Increment the number
    document.getElementById("incrementResult").innerHTML = "Increment: " + num; // Display result
}

//  decrement a number using the -- operator
function decrementNumber() {
    var num = 5;
    num--; // Decrement the number
    document.getElementById("decrementResult").innerHTML = "Decrement: " + num; // Display result
}

// generate a random number between 0 and 100 using Math.random()
function generateRandom() {
    var randomNum = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100
    document.getElementById("randomResult").innerHTML = "Random Number: " + randomNum; // Display result
}
