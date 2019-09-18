// hel;per function for math
const math = {

    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '/': function (x, y) { return x / y },
    '*': function (x, y) { return x * y }

};

// the goods
const arithmetic = (equation) => {

    let split = equation.split("");
    let sign = split[1];
    let first = Number(split[0]);
    let second = Number(split[2]);
    return math[sign](first, second)

};

// test cases
console.log(`4+2: ${arithmetic('4+2')}`);
console.log(`5*7: ${arithmetic('5*7')}`);
console.log(`6-1: ${arithmetic('6-1')}`);
console.log(`9/2: ${arithmetic('9/2')}`);