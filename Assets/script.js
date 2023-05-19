
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Array for every password criteria

var uppercaseChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberChoice = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChoice = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

 
var choiceArray = [];
var userArray = [];

// Setting our browser window questions to meet the criteria

var totalCharacter = window.prompt ("Choose between 8 characters and 128 characters for your password");
var numbers = window.confirm ("Do you want numbers in your password?");
var uppercases = window.confirm ("Do you want uppercases in your password?");
var lowercases = window.confirm ("Do want lowercases in your password?");
var specialCharacters = window.confirm ("Do you want special characters in your password?");


// If statements for the conditions

if (numbers){
  choiceArray = choiceArray.concat(numberChoice);
  
}

if (uppercases){
  choiceArray = choiceArray.concat(uppercaseChoice);

}

if (lowercases){
  choiceArray = choiceArray.concat(lowercaseChoice);

}

if (specialCharacters){
  choiceArray = choiceArray.concat(specialChoice);
}

console.log(choiceArray)


for (var i = 0; i < totalCharacter; i++) {
    // Adds elements to end of an array
  userArray.push (choiceArray[Math.floor(Math.random() * choiceArray.length)]); 
  }
  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



