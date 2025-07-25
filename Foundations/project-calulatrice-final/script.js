function add(a, b) {
    return parseInt(a) + parseInt(b)
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b)
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b)
}

function divide(a, b) {
    return parseInt(a) / parseInt(b)
}

function isOperator(token) {
    return ["+", "-", "*", "/"].includes(token);
}

function operate(number_a, operator, number_b) {
    switch (operator) {
        case "+":
            return add(number_a, number_b);
        case "-":
            return subtract(number_a, number_b);
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

function evaluateWithPrecedence(tokens) {
    // Step 1: Replace numbers strings with numbers
    tokens = tokens.map(t => (isOperator(t) ? t : parseFloat(t)));

    // Step 2: Handle *, /
    let stack = [];
    let i = 0;
    while (i < tokens.length) {
        if (tokens[i] === "*" || tokens[i] === "/") {
            const operator = tokens[i];
            const left = stack.pop();
            const right = tokens[i + 1];
            let result =
                operator === "*" ? left * right : left / right;
            stack.push(result);
            i += 2; // advance past operator and right-hand-side
        } else {
            stack.push(tokens[i]);
            i += 1;
        }
    }

    // Step 3: Handle +, -
    let result = stack[0];
    for (let j = 1; j < stack.length; j += 2) {
        const operator = stack[j];
        const right = stack[j + 1];
        result = operator === "+" ? result + right : result - right;
    }
    return result;
}

function updateDisplay() {
    document.getElementById('display').innerHTML = display.join('');
}

let number_a = "";
let operator = "";
let number_b = "";
let display = [];

let numbers_div = document.getElementById("numbers");
let operators_div = document.getElementById("operators");

for (let index = 9; index >= 0; index--) {
    let key = document.createElement('button'); // Create element
    key.innerHTML = index
    key.onclick = () => {
        // If display is empty, or last is an operator, start new number
        if (
            display.length === 0 ||
            isOperator(display[display.length - 1])
        ) {
            display.push(index.toString());
        } else {
            // If last entry is a number, append the new digit to it
            display[display.length - 1] += index.toString();
        }
        updateDisplay();
    };

    if (index === 0) {
        key.classList.add('zero'); // Add class    
    }
    numbers_div.appendChild(key); // Append to container
}

operations_array = ["C", "+", "-", "*", "/", "="]
for (let index = 0; index < operations_array.length; index++) {
    let key = document.createElement('button'); // Create element
    let op = operations_array[index];
    key.innerHTML = op
    if (op === "=") {
        numbers_div.appendChild(key);
    }
    else operators_div.appendChild(key); // Append to container

    key.onclick = () => {
        if(op === "C") {
                display = [];
                number_a = '';
                operator = '';
                number_b = '';
                updateDisplay();
                return;
            }
        if (op === "=") {
            // display = ["5", "*", "6", "-", "9", "/", "8"]
            let result = evaluateWithPrecedence(display);
            display = [result.toString()];
            updateDisplay();
            // Reset variables if needed
            number_a = result;
            operator = '';
            number_b = '';
            return;
        }
        else operator = op
        display.push(key.innerHTML)
        updateDisplay()
    }
}
