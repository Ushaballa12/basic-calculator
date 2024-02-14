let input = '';

function appendToDisplay(char) {
    input += char;
    updateDisplay();
}

function clearDisplay() {
    input = '';
    updateDisplay();
}

function calculate() {
    try {
        let value = eval(input);
        document.getElementById('value').textContent = value;
        input = '';
        updateDisplay();
    } catch (error) {
        document.getElementById('value').textContent = 'Error';
    }
}

function updateDisplay() {
    document.getElementById('input').textContent = input;
}
