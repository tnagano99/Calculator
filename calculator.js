// create functions for basic math calculations
function add(x, y) {
    let z = Number(x);
    let w = Number(y);
    return z + w;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function exp(x) {
    return x ** 2;
}

function sqrt(x) {
    return x ** 0.5;
}

function modulo(x, y) {
    return x % y;
}

// create function to determine appropriate operation
function operate(operator, x, y = 0) {
    let result = 0;
    if (operator === "add") {
        result = add(x, y);
    } else if (operator === "subtract") {
        result = subtract(x, y);
    } else if (operator === "multiply") {
        result = multiply(x, y);
    } else if (operator === "divide") {
        result = divide(x, y);
    } else if (operator === "exp") {
        result = exp(x);
    } else if (operator === "sqrt") {
        result = sqrt(x);
    } else if (operator === "modulo") {
        result = modulo(x, y);
    }
    return result;
}

// main
// initialize variables to store values used in calculations;
let num1 = "";
let operator = "";
let num2 = "";

// add event listeners to buttons
let buttons = Array.from(document.querySelectorAll(".btn"));
buttons.forEach(btn => btn.addEventListener("click", function(){
    let btnValue = btn.getAttribute('id');
    let displayText = document.querySelector("#displays");
    if (Number(btnValue) || btnValue === "dot") {
        // add numbers and decimals to display/num variables
        displayText.textContent += btn.textContent;
        if (operator === "") {
            num1 += btn.textContent; 
        } else {
            if (num2 === "") {
                // resets display when second number is inputted
                displayText.textContent = btn.textContent;
            }
            num2 += btn.textContent;
        }
    } else if (btnValue === "equal") {
        // if equals pressed perform selected operation
        let result;
        if (operator !== "" && num1 !== "" && num2 !== "") {
            result = operate(operator, num1, num2);
            displayText.textContent = result;
        } else if (operator === "exp" || operator === "sqrt") {
            result = operate(operator, num1);
            displayText.textContent = result;
        } else {
            // clear if no calculation can be performed
            num1 = "";
            displayText.textContent = "";
        }
        if (result) {
            num1 = result;
        }
        operator = "";
        num2 = "";
    } else if (btnValue === "clear") {
        // clear the display and reset the variables
        num1 = "";
        operator = "";
        num2 = "";
        displayText.textContent = "";
    } else {
        // for all operators
        if (num2 !== "") {
            num2 = "";
        }
        operator = btnValue;
    }
}));