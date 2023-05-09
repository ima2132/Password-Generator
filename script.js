// assignment code here

// adding a form to the page 
<form action="javascript:generatePassword()">
<input type="number" id="length" placeholder="Password Length" min="8" max="128" />
<input type="checkbox" id="lowercase" name="characters" value="lowercase" />
<label for="lowercase">Lowercase</label>
<input type="checkbox" id="uppercase" name="characters" value="uppercase" />
<label for="uppercase">Uppercase</label>
<input type="checkbox" id="numbers" name="characters" value="numbers" />
<label for="numbers">Numbers</label>
<input type="checkbox" id="symbols" name="characters" value="symbols" />
<label for="symbols">Symbols</label>
<input type="submit" value="Generate Password" />
</form>


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
