// Assignment Code
let generateBtn = document.querySelector('#generate');

//Generator Fuctions - https://www.w3schools.com/html/html_charset.asp
function getRandomLower () {
  //selects a random lowercase character based on its number on charset table between and inclusive of 97 to 121 (There are 26 letters in alphabet)
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
