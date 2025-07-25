function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(number_a, operator, number_b) {
    switch (operator) {
        case "+":
            return add(number_a, number_b);
        case "-":
            return substract(number_a, number_b);
        case "*":
            return multiply(number_a, number_b);
        case "/":
            return divide(number_a, number_b);
        default:
            break;
    }
}

let number_a;
let operator;
let number_b