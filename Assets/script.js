// Assignment code here
var pLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var pUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var pSpecial = ["!", "@", "#", "$", "%","^", "&", "*", "?"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lengthInput = window.prompt("Enter your desired password length between 8 and 128 characters: ")
if (!lengthInput || !lengthInput.isInteger()) {
  return;
} else if (lengthInput > 8 || lengthInput < 128) {
  window.alert("Please read instructions properly")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  /*------------------------------------------------------*/

  /*------------------------------------------------------*/
  var upperInput = window.confirm()


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
