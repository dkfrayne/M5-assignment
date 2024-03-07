// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch(operation) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
    }
    return null;
}
// COLLECT FIRST NUMBER FROM USER
let invalid = "";
let num1;
do {
    num1 = parseFloat(window.prompt(invalid + "Enter a number."));
    invalid = "Entry invalid. ";
} while(isNaN(num1))
// COLLECT SECOND NUMBER FROM USER
invalid = "";
let num2;
do {
    num2 = parseFloat(window.prompt(invalid + "Enter another number."));
    invalid = "Entry invalid. ";
} while(isNaN(num2))
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
invalid = "";
let operation; 
do {
    operation = window.prompt(invalid + "Enter a mathematical operator (+, -, *, or /).");
    invalid = "Entry invalid. ";
} while(!(operation == '+' || operation == '-' || operation == '*' || operation == '/'))
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result = calculate(num1, num2, operation);
alert(`${num1} ${operation} ${num2} = ${result}`);