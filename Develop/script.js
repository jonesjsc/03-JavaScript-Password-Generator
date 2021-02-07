// Assignment Code
var generateBtn = document.querySelector("#generate");

const passwordMinLength = 8;    // minimum length of generated password
const passwordMaxLength = 128;  // maximum length of generated password

// var i, j;

var upperCaseArray  = makeCharArray(65,90);                         // upper case letters are ascii 65 - 90
var lowerCaseArray  = makeCharArray(97,122);                        // lower case letters are ascii 97 - 122
var numbersArray    = makeCharArray(48,57);                         // numbers are ascii 48 - 57
var specialsArray   = makeCharArray(32,47);                         // owasp specials block 1 - ASCII 32 thru 47
var specialsArray   = specialsArray.concat(makeCharArray(58,64));   // owasp specials block 2 - ASCII 58 thru 64 
var specialsArray   = specialsArray.concat(makeCharArray(91,96));   // owasp specials block 3 - ASCII 91 thru 96
var specialsArray   = specialsArray.concat(makeCharArray(123,126)); // owasp specials block 4 - ASCII 123 thru 126 

// ------------------------------------------------------------------------------

/**
 * Build an array given a lower and upper ASCII decimal value
 * @param  {Number} lowerRange   lower range of the ASCII table
 * @param  {Number} upperRange   upper range of the ASCII table
 * @return {Object} returnArray  the array that has the ASCII characters between lowerRange and upperRange
 */

function makeCharArray(lowerRange,upperRange) {
  var i, j, returnArray;
  j = 0;
  returnArray = [];
  for (i = lowerRange; i <= upperRange; i++) {
    returnArray[j] = (String.fromCharCode(i));
    j++;
  }
  return (returnArray);
}


/**
 * Return a random integer between 0 and max
 * @param  {Number} max           lower range of the ASCII table
 * @return {Number} randomNumber  a Random Number
 */

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Return a random integer between 0 and max
 * @param  {} NULL                       no inputs expected
 * @return {String} passwordPlaceholder  a String composed of randomly determined array elements based on uiser input
 */

function generatePassword () {
  keepAskin = true;
  while (keepAskin) { 
    passwordLength = window.prompt("How many characters in your password? (8-128)",8);
    if (passwordLength >= passwordMinLength && passwordLength <= passwordMaxLength) {
      keepAskin = false;
    } else {
      window.alert("password length must be number between 8 and 128");
    }
  }

  bIncludeUpper = window.confirm("Include UPPER CASE letters? [OK] = yes [Cancel] = no");
  bIncludeNumeral = window.confirm("Include numerials [OK] = yes [Cancel] = no");
  bIncludeSpecial = window.confirm("Include Special Characters? [OK] = yes [Cancel] = no");

  if (!bIncludeUpper && !bIncludeNumeral && !bIncludeSpecial) {
    window.alert("imma go ahead an just assume you want only lower case then.");
    bIncludeLower = true;
  } else

  bIncludeLower = window.confirm("Include lower case letters? [OK] = yes [Cancel] = no");

  var resplendentArrayOfAllPossibilities = [];

  if (bIncludeUpper) {
    resplendentArrayOfAllPossibilities = resplendentArrayOfAllPossibilities.concat(upperCaseArray); 
  }

  if (bIncludeLower) {
    resplendentArrayOfAllPossibilities = resplendentArrayOfAllPossibilities.concat(lowerCaseArray); 
  }

  if (bIncludeNumeral) {
    resplendentArrayOfAllPossibilities = resplendentArrayOfAllPossibilities.concat(numbersArray);
  }

  if (bIncludeSpecial) {
    resplendentArrayOfAllPossibilities = resplendentArrayOfAllPossibilities.concat(specialsArray); 
  }

  var passwordPlaceholder = "";
  for (i = 0; i < passwordLength; i++) {
    passwordPlaceholder += resplendentArrayOfAllPossibilities[getRandomInt(resplendentArrayOfAllPossibilities.length)]
  }

  return (passwordPlaceholder);
}

// Write password to the #password input
function writePassword() {
  console.log ("word");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

