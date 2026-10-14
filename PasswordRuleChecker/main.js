/*Password Rule Checker
Build a small password validator. Each rule should live in its own function, and the final validator should report which rules failed.

Write these functions:

hasMinimumLength(password) should return true when the password has at least 8 characters.

hasNumber(password) should return true when the password contains at least one number.

hasUppercaseLetter(password) should return true when the password contains at least one uppercase letter.

getFailedRules(password) should return an array of missing rule names.

validatePassword(password) should return an object with valid and failedRules.
Sample checks:

console.log(validatePassword('hello'));
console.log(validatePassword('Hello123'));
console.log(validatePassword('hello123'));
console.log(validatePassword('HELLOABC'));

*/

function hasMinimumLength(password) {
    return password.length >= 8;
}

function hasNumber(password) {
    return password.split('').some(char => !Number.isNaN(char) && char != ' ');
}

function hasUpperCaseLetter(password) {
    return password.split('').some(char => char.toUpperCase() === char && char.toLowerCase() !== char);
}

