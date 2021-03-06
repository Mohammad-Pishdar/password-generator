// Assignment Code
let generateBtn = document.querySelector('#generate');
let j = null;

//creating a function that makes an array of numbers using a starting point and an end point in order to use it later to make an array of character set numbers for different character types criteria
function arrayMaker(num1, num2) {
  let array = [];
  for (let i = num1; i <= num2; i++) {
    array.push(i);
  }
  return array;
}

//Creating arrays for each type of characters requiered as the password building criteria namely: uppercase, lowercase, numbers and special characters. Code numbers are taken from: https://www.w3schools.com/html/html_charset.asp
let uppercaseCharCodesArray = arrayMaker(65, 90);
let lowercaseCharCodesArray = arrayMaker(97, 122);
let numbersCharCodesArray = arrayMaker(48, 57);
let specialCharactersCharCodesArray = arrayMaker(33, 47).concat(arrayMaker(58, 64)).concat(arrayMaker(91, 96)).concat(arrayMaker(123, 126));


//asking questions and making sure that the other questions are only asked if the user choses the right number (using a while loop with a dummy j variable with the value of null so in case of the wrong answer we can restart the function becuase of the condition in the while loop). We also add a + in front of the prompt to change our resulting variable type from a string to a number that can be used inside the function
function askQuestions() {
  while (j === null) {
    let numOfChracaters = +prompt("Choose the number of characters for your password (between 8 and 128)");
    if (numOfChracaters >= 8 && numOfChracaters <= 128) {
      let hasUppercase = confirm("Do you want your password to include uppercase letters?");
      let hasLowercase = confirm("Do you want your password to include lowercase letters?");
      let hasNumber = confirm("Do you want your password to include numbers?");
      let hasSpecialCharacters = confirm("Do you want your password to include special characters?");

      let prefrencesArray = [numOfChracaters, hasUppercase, hasLowercase, hasNumber, hasSpecialCharacters];
      return prefrencesArray;
    } else {
      j = null;
    }
  }
}

//saving the returned array from askQuestions() function into a variable so it can be used to fill out the required arguments for generatePassword function
let prefrencesArray = askQuestions();
console.log(prefrencesArray);

function generatePassword(length, upper, lower, number, symbol) {
  //start with an empty string that will be our generated password
  let generatedPassword = [];

  //defining another empty array as a starting point that can be concatenated to the arrays we already have based on the criteria the user choose.
  let refernceCodeNumbers = [];
  if (prefrencesArray[1]) {
    refernceCodeNumbers = refernceCodeNumbers.concat(uppercaseCharCodesArray);
  }
  if (prefrencesArray[2]) {
    refernceCodeNumbers = refernceCodeNumbers.concat(lowercaseCharCodesArray);
  }
  if (prefrencesArray[3]) {
    refernceCodeNumbers = refernceCodeNumbers.concat(numbersCharCodesArray);
  }
  if (prefrencesArray[4]) {
    refernceCodeNumbers = refernceCodeNumbers.concat(specialCharactersCharCodesArray);
  }

  //Cheks to see the user chose at least one of the criteria and if not return an empty string.
  if (!upper && !lower && !number && !symbol) {
    return "You did not choose any character type. Please refresh the page to start the app again.";
  } else {

    for (let i = 0; i < length; i++) {
      //Choosing a random chracter code number from the array of all the chracter code available for this scenario
      let randomCharacterCode = refernceCodeNumbers[Math.floor(Math.random() * refernceCodeNumbers.length)];

      //adding the randomly selected character to the empty generatedPassword array. We have to use the String.fromCharCode() method to get the character associated with that particular character code
      generatedPassword.push(String.fromCharCode(randomCharacterCode));
    }
    //returning the generated password. We have to make sure we pass an empty string to this function so it would join the characters together without anything between them
    console.log(generatedPassword.join(""))
    return generatedPassword.join("");
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword(prefrencesArray[0], prefrencesArray[1], prefrencesArray[2], prefrencesArray[3], prefrencesArray[4]);
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);