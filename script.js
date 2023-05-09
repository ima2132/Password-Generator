// assignment code here
document.addEventListener("DOMContentLoaded", () => {

// get references to the #generate element
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", () => {
  
// make sure to get the user's input 
const lowercase = document.querySelector("#lowercase").checked;
alert("Click OK to confirm including lowercase characters.");

const uppercase = document.querySelector("#uppercase").checked;
alert("Click OK to confirm including uppercase characters.");

const numbers = document.querySelector("#numbers").checked;
alert("Click OK to confirm including numerical values.");

const special = document.querySelector("#special").checked;
alert("Click OK to confirm including special characters.");

const length = parseInt(document.querySelector("#length").value, 10); 

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
    characters.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (uppercase) {
    characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (numbers) {
    characters.push("0123456789");
  }
  if (special) {
    characters.push("!@#$%^&*()-_+={}[]|\\:;'\",.<>/?");
  }

  const password= [];
  for (let i = 0; i < length; i++) {
    const character = characters[Math.floor(Math.random() * characters.length)];
    password.push(character);
  }

  // password input value
  document.querySelector("#password").value = password.join("");
});
});
