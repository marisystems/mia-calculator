// Functions for the operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
    // Round the result
}

function operate(operator, a, b) {
    switch(operator) {
        case "add":
            return add(a,b)
            break;
        case "subtract":
            return subtract(a,b)
            break;
        case "multiply":
            return multiply(a,b)
            break;
        case "divide":
            return divide(a,b)
            break;
        default:
            return "Unknown Operation"
    }
}

console.log("Hello");
console.log(operate("divide", 5, 5))
