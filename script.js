// Try to use an object for flow instead of global variables
let opObj = {
    opStorage: "",
    opPressed: false,
    opPressed: false,
    opPressedTwice: false,
    equalsPressed: false,
}

let numObj = {
    firstNum: "",
    secondNum: "",
    result: "",
}

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

function operate() {
    /* The logic below makes it dependnat on the state of the objects
        I think its easier for dealing with events than setting hard values
        when calling the function
    */
    let operator = opObj.opStorage;
    let a = Number(numObj.firstNum);
    let b = Number(numObj.secondNum);

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

function clear(inputText="", outputText="", equalsPressed = false) {
    // input and output below is for handling default parameters
    input.textContent = inputText;
    output.textContent = outputText;
    
    // Operator
    opObj.opStorage = "";
    opObj.opPressed = false;
    opObj.opPressedTwice = false;
    
    // Number
    numObj.firstNum = "";
    numObj.secondNum = "";
    numObj.equalsPressed = equalsPressed
}

function storeNumber() {

}


let handleInput = document.querySelector(".calc-container");
let input = document.querySelector("#input");
let output = document.querySelector("#output");

handleInput.addEventListener("click", e => {
    let target = e.target;
    let value = target.textContent;
    
    // Handle clear
    if (target.classList[0] == "clear") {
        clear();
    }

    // Handle numbers
    if (target.classList[0] == "num") {


        if (opObj.equalsPressed) {
            input.textContent = "";
        }

        // If operator not pressed append to first num
        // else append to second number
        // limit to only one operator
        if (!opObj.opPressed) {
            numObj.firstNum += value;
            console.log(numObj.firstNum);
        } else {
            numObj.secondNum += value;
            console.log(numObj.secondNum);
        }

        input.textContent += value;

    // Handle operators
    } else if (target.classList[0] == "op") {

        if (opObj.opPressed) {
            opObj.opPressedTwice = true;
        }

        if (opObj.opPressedTwice) {
            let result = operate()

            if (result != Infinity) {
                numObj.firstNum = result
                input.textContent =  numObj.firstNum
                numObj.secondNum = "";
                opObj.opPressedTwice = false;
            } else {
                clear("", "Nu uh :)")
            }
            
        }

        if (!opObj.opPressedTwice) {
            opObj.opStorage = value;
        }

        input.textContent += value;
        opObj.opPressed = true;
    
        // Handle equals
    } else if (target.classList[0] == "equals") {

        if (numObj.firstNum == "" || numObj.secondNum == "") {
            clear("","Invalid Operation", true)
        }

        result = operate(operatorStorage, +firstNumberStr, +secondNumberStr);

        if (result == Infinity) {
            output.textContent = "Nu uh :)";
        } else {
            output.textContent = result
        }
        clear("","", true)
    }

});

console.table(opObj);
console.table(numObj);

