// Assignment Code
let generateBtn = document.querySelector('#generate');

//creating a function that makes an array of numbers using a starting point and an end point in order to use it later to make an array of character set numbers for different character types criteria
function arrayMaker (num1, num2) {
  let array = [];
  for (let i = num1; i <= num2; i++) {
    array.push(i);
  }
  return array;
}

//asking questions and making sure that the other questions are only asked if the user choses the right number. We also add a + in front of the prompt to change our resulting variable type from a string to a number that can be used inside the function
function askQuestions() {
  let numOfChracaters = +prompt("Choose the number of characters for your password (between 8 and 128");
  if (numOfChracaters >= "8" || numOfChracaters <= "128") {
    let hasUppercase = confirm("Do you want your password to include uppercase letters?");
    let hasLowercase = confirm("Do you want your password to include lowercase letters?");
    let hasNumber = confirm("Do you want your password to include numbers?");
    let hasSymbols = confirm("Do you want your password to include symbols?");
    generatePassword(numOfChracaters, hasUppercase, hasLowercase, hasNumber, hasSymbols);
  } else {
    askQuestions();
  }
}

function generatePassword(length, upper, lower, number, symbol) {
  //start with an empty string that will be our generated password
  let generatedPassword = [];

  //Cheks to see the user chose at least one of the criteria and if not return an empty string.
  if (!upper && !lower && !number && !symbol) {
    return "";
  } else if (!upper && lower && number && symbol) {
    functions = [getRandomLower(), getRandomNumber(), getRandomSymbol()];
    for (let i = 0; i < length; i++) {
      // let character = functions[Math.floor(Math.random() * functions.length)];
      console.log(functions[Math.floor(Math.random() * functions.length)]);
      // generatedPassword.push(character);
    }
    console.log(generatedPassword.join(""));
    return generatedPassword;
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

askQuestions();