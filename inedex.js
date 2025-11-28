let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = '';

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operation = '';
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
}

function calculate(value) {
    if (value === '=') {
        if (previousNumber !== '' && operation !== '') {
            let result = eval(previousNumber + operation + currentNumber);
            display.value = result;
            previousNumber = result.toString();
            currentNumber = '';
            operation = '';
        }
    } else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
        if (currentNumber !== '') {
            previousNumber = currentNumber;
            currentNumber = '';
            operation = value;
        }
    } else {
        currentNumber += value;
        display.value = currentNumber;
    }
}
