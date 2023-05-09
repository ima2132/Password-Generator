// assignment code here

const form = document.querySelector("form");
const generateButton = document.querySelector("#generate");
const passwordInput = document.querySelector("#password");


// get references to the #generate element
generateButton.addEventListener("click", () => {
  
  // make sure to get the user's input 
const lowercase = form.lowercase.checked;
const uppercase = form.uppercase.checked;
const numbers = form.numbers.checked;
const special = form.special.checked;
const length = parseInt(form.length.value, 10);

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
    const character = characters[Math.floor(Math.random() *characters.length)];
    password.push(character);
  }

  // password input value
  passwordInput.value = password.join("");
});