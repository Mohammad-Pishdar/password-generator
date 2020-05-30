// Assignment Code
let generateBtn = document.querySelector('#generate');

//Password object
let password = {
  lowercaseLetters: getRandomLower,
  uppercaseLetters: getRandomUpper,
  numbers: getRandomNumber,
  symbols: getRandomSymbol
};

//Generator Fuctions - https://www.w3schools.com/html/html_charset.asp
function getRandomLower () {
  //selects a random lowercase character based on its number on charset table between and inclusive of 97 to 121 (There are 26 letters in alphabet)
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper () {
  //selects a random uppercase character based on its number on charset table between and inclusive of 65 to 90 (There are 26 letters in alphabet)
   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber () {
  //selects a random number based on its number on charset table between and inclusive of 48 to 57 (There are 10 number characters including 0)
   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol () {
  //selects a random symbol based on its index number on the defined symbols string varaiable
  let symbols = "!@#$%^&*()_={}[]?<>.,/"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//asking questions
function askQuestions() {
  let numOfChracaters = prompt("Choose the number of characters for your password (between 8 and 128");
  if (numOfChracaters >= "8" || numOfChracaters <= "128") {
    let hasUppercase = confirm("Do you want your password to include uppercase letters?");
    let hasLowercase = confirm("Do you want your password to include lowercase letters?");
    let hasNumber = confirm("Do you want your password to include numbers?");
    let hasSymbols = confirm("Do you want your password to include symbols?");
  }
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
