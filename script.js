// Global variables
let firstNumber = 0;
let secondNumber = 0;
let operatorPressed = false;

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

function updateInput(string) {
    let input = document.querySelector("#input")
    // Only numbers
    let regexNum = /[0-9]/g 
    // Only =
    let regexEq = /[=]/g

    if (string.match(regexNum)) {
        console.log("match number!")
        input.textContent += string;

        if (operatorPressed) {
            secondNumber = input.textContent;
        } else {
            firstNumber = input.textContent;
        }

        console.log(`First num: ${firstNumber}`)
        console.log(`Second num: ${secondNumber}`)

    // =
    } else if (string.match(regexEq)) {
        console.log("match equals");
        console.log(input);
    }
    // +-*/
    else {
        console.log("match operator")
        input.textContent += string;
        operatorPressed = true;
        console.log(input);

        /* Write some logic to change from the
        First number to the seconbd number here

        1. Change from firstNumber to secondNumber


        */
        
    }
}

function clearInput() {
    let input = document.querySelector("#input")
    input.textContent = "";
}

function getNumberClicked() {
    console.log("Function called")
    let numbers = document.querySelector(".numbers");
    let number = 0;
    
    numbers.addEventListener("click", e => {
        let target = e.target;
        number = target
    });
}

// Handle input of numbers and operators
let buttons = document.querySelector(".btn-layout");
buttons.addEventListener("click", e => {
    let target = e.target;
    let targetClass = target.getAttribute("class");
    let targetContent = target.textContent;

    if (targetClass === "num") {
        updateInput(targetContent);
    } else if (targetClass === "op") {
        updateInput(targetContent)
    } else {
        console.log("Not a number or an operator")
    }
})

// Handle clear buttons
let clear = document.querySelector("#round-button")
clear.addEventListener("click", e => {
    clearInput();
})

getNumberClicked();
console.log(firstNumber)