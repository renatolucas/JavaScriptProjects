console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));

function isPositive(number) {
    return number > 0
}

function isNegative(number) {
    return number < 0
}

function isZero(number) {
    return number === 0
}

function isEven(number) {
    return number % 2 === 0
}

function describeNumber(number) {
    const result = {};
    result.positive = isPositive(number);
    result.negative = isNegative(number);
    result.zero = isZero(number);
    result.isEven = isEven(number);
    result.odd = !isEven(number);

    return result;
}