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
    let regexNum = /[0-9]/g 

    if (string.match(regexNum)) {
        console.log("matches!")
        input.textContent += string;
    }
}

function clearInput() {
    let input = document.querySelector("#input")
    input.textContent = "";
}

// Global variables
let input = 0;

function getNumberClicked() {
    console.log("Function called")
    let numbers = document.querySelector(".numbers");
    let number = 0;
    numbers.addEventListener("click", e => {
        let target = e.target;
        number = target
    });
    console.log(number)
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
        console.log("Not valid")
    }
})

// Handle clear buttons
let clear = document.querySelector("#round-button")
clear.addEventListener("click", e => {
    clearInput();
})

getNumberClicked();