// Accesible global variables
var lengthInput = 0;
var options = [];
var pLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pNumerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var pSpecial = ["!", "@", "#", "$", "%","^", "&", "*", "?", "/", "'", "(",")","-","+"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//initiates other functions and displays final password
function writePassword() {
  var queries = promptUser();
  var passwordText = document.querySelector("#password");
  var password = generatePassword(options);
  passwordText.value = password;
};
// gathers desired information from user
function promptUser() {
  lengthInput = parseInt(prompt("Enter your desired password length between 8 and 128 characters: "));
  
  if(!lengthInput || lengthInput < 8 || lengthInput > 128){
    lengthInput = alert("Incorrect input. Please try again.");
    return false;
  };

  if (confirm(
    "Do you want to include upper case letters?\nOk for Yes. Cancel for No."
  )) {options = options.concat(pUpper)};

  if (confirm(
    "Do you want to include lower case letters?\nOk for Yes. Cancel for No."
  )) {options = options.concat(pLower)};

  if(confirm(
    "Do you want to include numbers?\nOk for Yes. Cancel for No."
  )); {options = options.concat(pNumerals)}

  if(confirm(
    "Do you want to include special characters?\nOk for Yes. Cancel for No."
   )); {options = options.concat(pSpecial)}
   console.log(options);
};

// randomizes character options
function generatePassword() {
  var passwordArray = [];
  for(var i = 0; i < lengthInput; i++) {
    var pChar= options[Math.floor(Math.random()*options.length)];
    passwordArray.push(pChar)
  }
  console.log(passwordArray.join(""));
  return passwordArray.join("");
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
