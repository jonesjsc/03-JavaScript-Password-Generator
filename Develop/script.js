// Assignment Code
var generateBtn = document.querySelector("#generate");

// to build your string with the passwored just use += 

var i, j;

var upperCaseArray  = makeCharArray(65,90);  // upper case letters are ascii 65 - 90
var lowerCaseArray  = makeCharArray(97,122); // lower case letters are ascii 97 - 122
var numbersArray    = makeCharArray(48,57);    // numbers are ascii 48 - 57
var specialsArray   = makeCharArray(32,47) +  // owasp specials block 1 - ASCII 32 thru 47
                      makeCharArray(58,64) +  // owasp specials block 2 - ASCII 58 thru 64 
                      makeCharArray(91,96) +  // owasp specials block 3 - ASCII 91 thru 96
                      makeCharArray(123,126); // owasp specials block 4 - ASCII 123 thru 126 

action=window.confirm("did you drink ACV today?");

if(action) {
  window.alert("you hit ok");
}
  else {
window.alert("you hit cancel");
}                  

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

function generatePassword () {
  return ("wassup dawg");
}

// Write password to the #password input
function writePassword() {
  console.log ("word");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // passwordText.value = "testing";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

