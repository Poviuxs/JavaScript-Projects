// Utilizing the .concat() method
function full_sentence() {
    var part_1 = "Guess what day ";
    var part_2 = "it is...";
    var part_3 = "New Year!!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("stringMethod").innerHTML = whole_sentence;
}

// Utilizing the .slice() method
function slice_Method() {
    var sentence = "Easy peasy lemon squeezy ";
    var section = sentence.slice(11, 16);
    document.getElementById("slice").innerHTML = section; 
}

// Utilizing the .toString() method
function string_Method() {
    var myNumber = 999;
    document.getElementById("ToString").innerHTML = myNumber.toString(); 
}

// Utilizing the .toPrecision() method
function precision_method() {
    var myNumber = 123.45678910111213;
    document.getElementById("SpecificLength").innerHTML = myNumber.toPrecision(4);
}
