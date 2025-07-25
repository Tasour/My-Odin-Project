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
        case "%":
            return divide(number_a, number_b);
        default:
            break;
    }
}

let number_a;
let operator;
let number_b

let keyboard_div = document.getElementById("keyboard");

for (let index = 0; index < 10; index++) {
    let key = document.createElement('div'); // Create element
    key.innerHTML = index
    key.classList.add('key'); // Add class
    keyboard_div.appendChild(key); // Append to container
}

operations_array = ["+", "-", "x", "/", "=", "Clear"]
for (let index = 0; index < operations_array.length; index++) {
    let key = document.createElement('div'); // Create element
    let op = operations_array[index];
    key.innerHTML = op
    key.classList.add('operation_key'); // Add class
    keyboard_div.appendChild(key); // Append to container
}

