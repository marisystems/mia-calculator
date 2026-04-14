// Global variables
let firstNumberStr = "";
let secondNumberStr = "";
let operatorStorage = "";
let operatorPressed = false;
let operatorPressedTwice = false;
let equalsPressed = false;
let result = "";

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


let handleInput = document.querySelector(".calc-container");
let input = document.querySelector("#input");
let output = document.querySelector("#output");

handleInput.addEventListener("click", e => {
    let target = e.target;
    let value = target.textContent;
    
    // Handle clear
    if (target.classList[0] == "clear") {
        input.textContent = "";
        output.textContent = "";
        operatorStorage = "";
        operatorPressed = false;
        operatorPressedTwice = false;
        firstNumberStr = "";
        secondNumberStr = "";
        input.textContent = "";
    }

    // Handle numbers
    if (target.classList[0] == "num") {

        // If operator not pressed append to first num
        // else append to second number
        // limit to only one operator
        if (equalsPressed) {
            input.textContent = "";
        }

        equalsPressed = false;

        if (!operatorPressed) {
            firstNumberStr += value;
        } else {
            secondNumberStr += value;
        }

        input.textContent += value;

    // Handle operators
    } else if (target.classList[0] == "op") {

        if (operatorPressed) {
            operatorPressedTwice = true;
        }

        if (operatorPressedTwice) {
            let result = operate(operatorStorage, + firstNumberStr, + secondNumberStr);
            if (result != Infinity) {
                firstNumberStr = result
                input.textContent =  firstNumberStr
                secondNumberStr = "";
                operatorPressedTwice = false;
            } else {
                output.textContent = "Nu uh :)"
                operatorStorage = "";
                
                operatorPressed = false;
                operatorPressedTwice = false;
                firstNumberStr = "";
                secondNumberStr = "";
            }
            
        }

        if (!operatorPressedTwice) {
            console.log("Stored")
            operatorStorage = value;
        }

        input.textContent += value;
        operatorPressed = true;

    
        // Handle equals
    } else if (target.classList[0] == "equals") {

        if (firstNumberStr == "" || secondNumberStr == "") {
            operatorStorage = "";
            operatorPressed = false;
            operatorPressedTwice = false;
            firstNumberStr = "";
            secondNumberStr = "";
            equalsPressed = true;
        }

        result = operate(operatorStorage, +firstNumberStr, +secondNumberStr);
        if (result == Infinity) {
            output.textContent = "Nu uh :)";
        } else {
            output.textContent = result
        }
        
        operatorStorage = "";
        operatorPressed = false;
        operatorPressedTwice = false;
        firstNumberStr = "";
        secondNumberStr = "";
        equalsPressed = true;
    }

    // Debugging
    console.log("----")
    console.log(`First num: ${firstNumberStr}`);
    console.log(`Second Num: ${secondNumberStr}`);
    console.log("----")
    console.log(`OP Pressed: ${operatorPressed}`)
    console.log(`OP Pressed Twice: ${operatorPressedTwice}`)
    console.log(`OP Storage: ${operatorStorage}`)
    
});

