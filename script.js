document.addEventListener('DOMContentLoaded', () => {
    const modeLinks = document.querySelectorAll('aside ul li');
    const calculators = document.querySelectorAll('.calculator');

    modeLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links and calculators
            modeLinks.forEach(item => item.classList.remove('active'));
            calculators.forEach(calc => calc.classList.remove('active'));

            // Add active class to clicked link and corresponding calculator
            link.classList.add('active');
            const selectedMode = document.getElementById(link.getAttribute('data-mode'));
            selectedMode.classList.add('active');
        });
    });
});

function appendNumber(number) {
    const input = document.getElementById('math-input');
    input.value = input.value === '0' ? number : input.value + number;
}

function appendOperator(operator) {
    const input = document.getElementById('math-input');
    input.value += operator;
}

function appendDot() {
    const input = document.getElementById('math-input');
    if (!input.value.includes('.')) {
        input.value += '.';
    }
}

function clearInput() {
    document.getElementById('math-input').value = '';
}


function calculateMath() {
    const input = document.getElementById('math-input').value;
    try {
        const result = eval(input);
        document.getElementById('math-result').innerText = `Result: ${result}`;
    } catch (error) {
        document.getElementById('math-result').innerText = 'Invalid expression';
    }
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const height = parseFloat(document.getElementById('bmi-height').value);
    if (weight && height) {
        const bmi = weight / (height * height);
        document.getElementById('bmi-result').innerText = `BMI: ${bmi.toFixed(2)}`;
        if (bmi < 18.50) {
            document.getElementById('bmi-category').innerText = 'You are categorized as underweight.';
        } else if (bmi >= 18.50 && bmi <= 24.90) {
            document.getElementById('bmi-category').innerText = 'You are categorized as normal.';
        } else if (bmi >= 25 && bmi <= 29.9) {
            document.getElementById('bmi-category').innerText = 'You are categorized as overweight.';
        } else if (bmi>=30.0 && bmi <= 34.9) {
            document.getElementById('bmi-category').innerText = 'You are categorized as class 1 obese.';
        } else if (bmi >= 35.0 && bmi <= 39.9) {
            document.getElementById('bmi-category').innerText = 'You are categorized as class 2 obese.';
        } else if (bmi >= 40.0) {
            document.getElementById('bmi-category').innerText = 'You are categorized as class 3 obese.';
        }
    } else {
        document.getElementById('bmi-result').innerText = 'Please enter valid values';
    }
}

function addSubject() {
    const table = document.getElementById('gpa-table');
    const newRow = table.insertRow();
    const subjectCell = newRow.insertCell(0);
    const gradeCell = newRow.insertCell(1);
    subjectCell.innerHTML = '<input type="text" placeholder="Subject">';
    gradeCell.innerHTML = '<input type="number" placeholder="Grade">';
}

function calculateGPA() {
    const table = document.getElementById('gpa-table');
    let totalGrades = 0;
    let count = 0;
    for (let i = 1; i < table.rows.length; i++) {
        const grade = parseFloat(table.rows[i].cells[1].children[0].value);
        if (!isNaN(grade)) {
            totalGrades += grade;
            count++;
        }
    }
    const gpa = totalGrades / count;
    document.getElementById('gpa-result').innerText = `Average Grade: ${gpa.toFixed(2)}`;
}

function calculateMean() {
    const input = document.getElementById('mean-input').value;
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
        document.getElementById('mean-result').innerText = 'Please enter valid numbers';
        return;
    }
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    document.getElementById('mean-result').innerText = `Mean: ${mean.toFixed(2)}`;
}


function calculateTime() {
    const hours = parseInt(document.getElementById('time-hours').value) || 0;
    const minutes = parseInt(document.getElementById('time-minutes').value) || 0;
    const seconds = parseInt(document.getElementById('time-seconds').value) || 0;
    const unit = document.getElementById('time-unit').value;  // No parseInt here

    if (unit === "seconds") {
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        document.getElementById('time-result').innerText = `Total Time: ${totalSeconds} seconds`;
    } else if (unit === "minutes") {
        const totalMinutes = hours * 60 + minutes + seconds / 60;
        document.getElementById('time-result').innerText = `Total Time: ${totalMinutes.toFixed(2)} minutes`;
    } else if (unit === "hours") {
        const totalHours = hours + minutes / 60 + seconds / 3600;
        document.getElementById('time-result').innerText = `Total Time: ${totalHours.toFixed(2)} hours`;
    }
}


function convertLength() {
    const value = parseFloat(document.getElementById('length-value').value);
    const fromUnit = document.getElementById('length-from').value;
    const toUnit = document.getElementById('length-to').value;
    const conversionRates = {
        meters: 0.001,
        kilometers: 1,
        feet: 0.00328084,
        miles: 0.621371
    };
    if (value && conversionRates[fromUnit] && conversionRates[toUnit]) {
        const result = (value * conversionRates[fromUnit]) / conversionRates[toUnit];
        document.getElementById('length-result').innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
    } else {
        document.getElementById('length-result').innerText = 'Please enter a valid value and units';
    }
}

function convertWeight() {
    const value = parseFloat(document.getElementById('weight-value').value);
    const fromUnit = document.getElementById('weight-from').value;
    const toUnit = document.getElementById('weight-to').value;
    const conversionRates = {
        kilograms: 1000,
        grams: 1,
        pounds: 35.274,
        ounces: 2.20462
    };
    if (value && conversionRates[fromUnit] && conversionRates[toUnit]) {
        const result = (value * conversionRates[fromUnit]) / conversionRates[toUnit];
        document.getElementById('weight-result').innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
    } else {
        document.getElementById('weight-result').innerText = 'Please enter a valid value and units';
    }
}

function convertArea() {
    const value = parseFloat(document.getElementById('area-value').value);
    const fromUnit = document.getElementById('area-from').value;
    const toUnit = document.getElementById('area-to').value;
    const conversionRates = {
        'square meters': 0.000001,
        'square kilometers': 1,
        acres: 0.0001,
        hectares: 0.000247105
    };
    if (value && conversionRates[fromUnit] && conversionRates[toUnit]) {
        const result = (value * conversionRates[fromUnit]) / conversionRates[toUnit];
        document.getElementById('area-result').innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
    } else {
        document.getElementById('area-result').innerText = 'Please enter a valid value and units';
    }
}

function convertTemperature() {
    const value = parseFloat(document.getElementById('temperature-value').value);
    const fromUnit = document.getElementById('temperature-from').value;
    const toUnit = document.getElementById('temperature-to').value;

    let result;
    if (fromUnit === 'celsius') {
        result = toUnit === 'fahrenheit' ? (value * 9/5) + 32 : toUnit === 'kelvin' ? value + 273.15 : value;
    } else if (fromUnit === 'fahrenheit') {
        result = toUnit === 'celsius' ? (value - 32) * 5/9 : toUnit === 'kelvin' ? (value - 32) * 5/9 + 273.15 : value;
    } else if (fromUnit === 'kelvin') {
        result = toUnit === 'celsius' ? value - 273.15 : toUnit === 'fahrenheit' ? (value - 273.15) * 9/5 + 32 : value;
    }
    document.getElementById('temperature-result').innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
}