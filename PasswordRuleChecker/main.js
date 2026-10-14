console.log(validatePassword('hello'));
console.log(validatePassword('Hello123'));
console.log(validatePassword('hello123'));
console.log(validatePassword('HELLOABC'));

function hasMinimumLength(password) {
    return password.length >= 8;
}

function hasNumber(password) {
    return password.split('').some(char => !isNaN(char) && char != ' ');
}

function hasUpperCaseLetter(password) {
    return password.split('').some(char => char.toUpperCase() === char && char.toLowerCase() !== char);
}

function getFailedRules(password) {
    const failedRules = [];

    if (!hasMinimumLength(password)) {
        failedRules.push('minimum length');
    }

    if (!hasNumber(password)) {
        failedRules.push('number');
    }

    if (!hasUpperCaseLetter(password)) {
        failedRules.push('uppercase letter');
    }

    return failedRules;
}

function validatePassword(password) {
    const failedRules = getFailedRules(password);
    return {
        valid: failedRules.length === 0,
        failedRules: failedRules
    }
}