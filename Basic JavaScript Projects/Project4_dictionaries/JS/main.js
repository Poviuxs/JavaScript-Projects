
function displayDictionaryValue() {
    // country names and their capitals
var countries = {
    "USA": "Washington, D.C.",
    "Canada": "Ottawa",
    "Germany": "Berlin",
    "France": "Paris",
    "Japan": "Tokyo"
};
     delete countries.Canada;
    var capital = countries["Canada"];

    // Display the capital in the paragraph with id "Dictionary"
    document.getElementById("Dictionary").innerHTML = "The capital of Canada is: " + capital;

}