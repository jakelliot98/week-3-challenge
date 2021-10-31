// Assignment code here


// Get references to the #generate element

var letters = window.prompt("Do you want to use letters? Enter 'yes' or 'no'.")
var numbers = window.prompt("Do you want to use numbers? Enter 'yes' or 'no'.")
var symbols = window.prompt("Do you want to use symbols? Enter 'yes' or 'no'.")
pwLength = window.prompt ("How long will your password be? Enter a number 8 - 128.");

var generateBtn = document.querySelector("#generate");

function generatePassword () {
if (letters === "yes" && numbers === "yes" && symbols === "yes" && pwLength >= 8 && pwLength <= 128) {
  var length = pwLength,
      charset = "ABCDEFGHOJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
      password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt((Math.random() * n))
  }

}
else if (numbers === "no" && letters === "yes" && symbols === "yes" && pwLength >= 8 && pwLength <= 128) {
  var length = pwLength,
  charset = "ABCDEFGHOJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
  password = "";
for (var i = 0, n = charset.length; i < length; ++i) {
password += charset.charAt((Math.random() * n))
}
}

else if (letters === "no" && numbers === "yes" && symbols === "yes" && pwLength >= 8 && pwLength <= 128) {
  var length = pwLength,
  charset = "1234567890!@#$%^&*()"
  password = "";
for (var i = 0, n = charset.length; i < length; ++i) {
password += charset.charAt((Math.random() * n))
}
}

else if (symbols === "no" && letters === "yes" && numbers === "yes" && pwLength >= 8 && pwLength <= 128) {
  var length = pwLength,
  charset = "ABCDEFGHOJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
  password = "";
for (var i = 0, n = charset.length; i < length; ++i) {
password += charset.charAt((Math.random() * n))
}
}

else if (pwLength < 8 || pwLength > 128) {
  pwLength = window.alert ("You must choose a password length between 8 and 128. Refresh and try again!");
}


else if (numbers === "no" && letters === "no" && symbols === "no") {
  window.alert("Confucius says, 'A password without any characters is not a password!'")
}

else if (numbers === "no" && letters === "no" && symbols === "yes" && pwLength >= 8 && pwLength <= 128){
  var length = pwLength,
  charset = "!@#$%^&*()"
  password = "";
for (var i = 0, n = charset.length; i < length; ++i) {
password += charset.charAt((Math.random() * n))
}
}

else if (numbers === "no" && letters === "yes" && symbols === "no" && pwLength >= 8 && pwLength <= 128){
  var length = pwLength,
  charset = "ABCDEFGHOJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  password = "";
for (var i = 0, n = charset.length; i < length; ++i) {
password += charset.charAt((Math.random() * n))
}
}

else if (numbers === "yes" && letters === "no" && symbols === "no" && pwLength >= 8 && pwLength <= 128){
  var length = pwLength,
  charset = "1234567890"
  password = "";
for (var i = 0, n = charset.length; i < length; ++i) {
password += charset.charAt((Math.random() * n))
}
}

else {
  window.alert ("Choose 'yes' or 'no', length must be between 8 and 128. Refresh and try again.");
}
return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
