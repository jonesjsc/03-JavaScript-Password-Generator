// Assignment Code
var generateBtn = document.querySelector("#generate");

const passwordMinLength = 8;    // minimum length of generated password
const passwordMaxLength = 128;  // maximum length of generated password

var upperCaseArray  = makeCharArray(65,90);                         // upper case letters are ascii 65 - 90
var lowerCaseArray  = makeCharArray(97,122);                        // lower case letters are ascii 97 - 122
var numbersArray    = makeCharArray(48,57);                         // numbers are ascii 48 - 57
var specialsArray   = makeCharArray(33,47);                         // owasp specials block 1 - ASCII 33 thru 47
                                                                    // NOTE: owasp says a space is ok in a password, but they are idiots so we will start block 1 at 33 and skip the SPACE.
var specialsArray   = specialsArray.concat(makeCharArray(58,64));   // plus owasp specials block 2 - ASCII 58 thru 64 
var specialsArray   = specialsArray.concat(makeCharArray(91,96));   // plus owasp specials block 3 - ASCII 91 thru 96
var specialsArray   = specialsArray.concat(makeCharArray(123,126)); // plus owasp specials block 4 - ASCII 123 thru 126 

// ------------------------------------------------------------------------------

/**
 * Build an array given a lower and upper ASCII decimal value
 * @author Jason Jones <jason.e.jones@gmail.com>
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
 * Runs through some click box questions and returns a random password
 *   Note - Some BASIC error checking / user input checking is performed:
 *    1. This will produce at a minimum a lowercase random password
 *    2. This enforce a minimum password length of passwordMinLength
 *    3. This enforces a maximum passsword length of passwordMaxLength
 * 
 * @param  {} NULL                       no inputs expected
 * @return {String} passwordPlaceholder  a String composed of randomly determined array elements based on uiser input
 */

function generatePassword () {
  keepAskin = true;
  while (keepAskin) { 
    // passwordLength = window.prompt(`How many characters in your password? (${passwordMinLength}-${passwordMaxLength})`,12);
    passwordLength = window.prompt("How Many characters in your password? (" + passwordMinLength + "-" + passwordMaxLength +")",12);
    if (passwordLength >= passwordMinLength && passwordLength <= passwordMaxLength) {
      keepAskin = false;
    } else {
      window.alert("password length must be number between 8 and 128");
    }
  }

  // sure, i could be building the BigArray at each window.confirm, but my feeble mind wants to collect the data first before acting on the data.

  bIncludeUpper = window.confirm("Include UPPER CASE letters? [OK] = yes [Cancel] = no");
  bIncludeNumeral = window.confirm("Include numerials [OK] = yes [Cancel] = no");
  bIncludeSpecial = window.confirm("Include Special Characters? [OK] = yes [Cancel] = no");

  if (!bIncludeUpper && !bIncludeNumeral && !bIncludeSpecial) { // the user has selected NO to three out of three presented options - so we force them to a random password with lowercase.  We should force these bastards to use only special characters.  But I digress.
    window.alert("defaulting to just lower case letters then you dope");
    bIncludeLower = true;
  } else

  bIncludeLower = window.confirm("Include lower case letters? [OK] = yes [Cancel] = no");

  // so we've collected what the users intent is at this point, lets proceed with building our BigArray.

  var resplendentArrayOfAllPossibilities = []; // because the use of the word resplendent is important every now and then

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

  for (i = 0; i < passwordLength; i++) { // lets pick out random elements of this BigArray and += together a string here
    passwordPlaceholder += resplendentArrayOfAllPossibilities[getRandomInt(resplendentArrayOfAllPossibilities.length)]
  }

  return (passwordPlaceholder);  // eureka we have a random password
}

/**
 * Fires generatePassword, then pushes the return from generatePassword to the div id="#password"
 * @param  {} 
 * @return {} 
 */

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
