// assignment code here

const form = document.querySelector("form");
const generateButton = document.querySelector("#generate");
const passwordInput = document.querySelector("#password");


// get references to the #generate element
generateButton.addEventListener("click", () => {
  
  // make sure to get the user's input 
const lowercase = form.lowercase.checked;
const uppercase = form.uppercase.checked;





})


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
