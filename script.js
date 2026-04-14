// Global variables
let firstNumberStr = "";
let secondNumberStr = "";
let operatorStorage = "";
let operatorPressed = false;
let operatorPressedTwice = false;

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
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a,b)
            break;
        case "-":
            return subtract(a,b)
            break;
        case "*":
            return multiply(a,b)
            break;
        case "/":
            return divide(a,b)
            break;
        default:
            return "Unknown Operation"
    }
}


/* Outline of program
1. Get the first number pressed at the keys
1.1 If an operator is pressed, get the second number
1.3 Store them at firstNumber and secondNumber

*/

// Separate numbers and operators event handling for simplicity


let input = document.querySelector(".calc-container");
input.addEventListener("click", e => {
    let target = e.target;
    let value = target.textContent;
    
    // Handle clear
    if (target.classList[0] == "clear") {
        console.log("Clear");
        operatorStorage = "";
        operatorPressed = false;
        operatorPressedTwice = false;
        firstNumberStr = "";
        secondNumberStr = "";
    }

    // Handle numbers
    if (target.classList[0] == "num") {

        // If operator not pressed append to first num
        // else append to second number
        // limit to only one operator
        if (!operatorPressed) {
            firstNumberStr += value;
        } else {
            secondNumberStr += value;
        }

        console.log(`First num: ${firstNumberStr}`);
        console.log(`Second Num: ${secondNumberStr}`);
        
        // Handle operators
    } else if (target.classList[0] == "op") {
        operatorStorage = value;
        operatorPressed = true;

        if (operatorPressedTwice) {
            console.log("Operating")
            console.log(value);
            firstNumberStr = operate(value, + firstNumberStr, + secondNumberStr);
            secondNumberStr = "";
            operatorPressedTwice = false;
        }

        if (operatorPressed) {
            operatorPressedTwice = true;
        }
    
        // Handle equals
    } else if (target.classList[0] == "equals") {
        console.log(operate(operatorStorage, +firstNumberStr, +secondNumberStr))
    }
    
});

console.log(operate("*", 5, 2))