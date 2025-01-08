function switchMode() {
    const mode = document.getElementById('mode').value;
    document.getElementById('basic-calculator').style.display = mode === 'basic' ? 'block' : 'none';
    document.getElementById('advanced-calculator').style.display = mode === 'advanced' ? 'block' : 'none';
    document.getElementById('fraction-calculator').style.display = mode === 'fraction' ? 'block' : 'none';
}

function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculateResult() {
    let display = document.getElementById('display').innerText;
    try {
        display = display.replace('^', '**').replace('sqrt(', 'Math.sqrt(').replace('log(', 'Math.log10(');
        let result = eval(display);
        document.getElementById('display').innerText = result;
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
    }
}

function appendToAdvancedDisplay(value) {
    document.getElementById('advanced-display').innerText += value;
}

function clearAdvancedDisplay() {
    document.getElementById('advanced-display').innerText = '';
}

function calculateAdvancedResult() {
    let display = document.getElementById('advanced-display').innerText;
    try {
        display = display.replace('^', '**').replace('sqrt(', 'Math.sqrt(').replace('log(', 'Math.log10(');
        let result = eval(display);
        document.getElementById('advanced-display').innerText = result;
    } catch (e) {
        document.getElementById('advanced-display').innerText = 'Error';
    }
}

function calculateFraction() {
    let num1 = parseInt(document.getElementById('numerator1').value);
    let denom1 = parseInt(document.getElementById('denominator1').value);
    let num2 = parseInt(document.getElementById('numerator2').value);
    let denom2 = parseInt(document.getElementById('denominator2').value);
    let operator = document.getElementById('fraction-op').value;
    
    let result;
    if (operator === '+') {
        result = `${(num1 * denom2 + num2 * denom1)} / ${(denom1 * denom2)}`;
    } else if (operator === '-') {
        result = `${(num1 * denom2 - num2 * denom1)} / ${(denom1 * denom2)}`;
    } else if (operator === '*') {
        result = `${num1 * num2} / ${denom1 * denom2}`;
    } else if (operator === '/') {
        result = `${num1 * denom2} / ${num2 * denom1}`;
    }
    document.getElementById('fraction-result').innerText = result;
}

function clearFraction() {
    document.getElementById('numerator1').value = '';
    document.getElementById('denominator1').value = '';
    document.getElementById('numerator2').value = '';
    document.getElementById('denominator2').value = '';
    document.getElementById('fraction-result').innerText = '';
}
