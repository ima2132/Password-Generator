// assignment code here
document.addEventListener("DOMContentLoaded", () => {

// get references to the #generate element
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", () => {
  
// make sure to get the user's input 
const length = prompt("Please choose a password length between 8 and 128 characters.");

const lowercase = confirm("Would you like to include lowercase characters?");

const uppercase = confirm("Would you like to include uppercase characters?");

const numbers = confirm("Would you like to include numbers?");

const special = confirm("Would you like to include special characters?");


// make sure the user's input satisfies the given min-max character password length
if (length < 8 || length > 128) {
  alert("Please choose a password length between 8 and 128 characters.");
  return;
  }

  if (!lowercase && !uppercase && !numbers && !special) {
    alert("Please select at least one character type.");
    return;
  }

  // generating a password 
  const characters = [];
  if (lowercase) {
    characters.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  }
  if (uppercase) {
    characters.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
  }
  if (numbers) {
    characters.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
  }
  if (special) {
    characters.push('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '\'', '\"', ',', '.', '<', '>', '/', '?');
  }

  console.log('characters:', characters);

  const password= [];
  for (let i = 0; i < 8; i++) {
    const character = characters[Math.floor(Math.random() * characters.length)];
    password.push(character);
  }

  console.log('password:', password);
  // password input value
  document.querySelector("#password").value = password.join("");
});
});
