let display = document.getElementById('display');
let currentInput = '';

function appendSymbol(symbol) {
    currentInput += symbol;
    display.innerHTML = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.innerHTML = result;
        currentInput = '';
    } catch (error) {
        display.innerHTML = 'Error';
    }
}

function clearDisplay() {
    currentInput = '';
    display.innerHTML = '0';
}
