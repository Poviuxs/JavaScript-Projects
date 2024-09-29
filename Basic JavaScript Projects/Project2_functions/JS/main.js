// current value 
var value = 0;

// Function that increments the value using the += operator
function incrementValue() {
    // Use the += operator to add 1 to the current value
    value += 1;

    // Update the content of the HTML element with the new value
    document.getElementById("displayResult").innerHTML = "Current Value: " + value;
}
