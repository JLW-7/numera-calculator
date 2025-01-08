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
    document.getElementById('gpa-result').innerText = `GPA: ${gpa.toFixed(2)}`;
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

function calculateAge() {
    const dob = new Date(document.getElementById('age-dob').value);
    const date = new Date(document.getElementById('age-date').value);
    if (dob && date) {
        const age = date.getFullYear() - dob.getFullYear();
        document.getElementById('age-result').innerText = `Age: ${age} years`;
    } else {
        document.getElementById('age-result').innerText = 'Please enter valid dates';
    }
}

function calculateTime() {
    const hours = parseInt(document.getElementById('time-hours').value) || 0;
    const minutes = parseInt(document.getElementById('time-minutes').value) || 0;
    const seconds = parseInt(document.getElementById('time-seconds').value) || 0;
    const totalMinutes = hours * 60 + minutes + seconds / 60;
    document.getElementById('time-result').innerText = `Total Time: ${totalMinutes.toFixed(2)} minutes`;
}

function convertLength() {
    const value = parseFloat(document.getElementById('length-value').value);
    const fromUnit = document.getElementById('length-from').value;
    const toUnit = document.getElementById('length-to').value;
    const conversionRates = {
        meters: 1,
        kilometers: 0.001,
        feet: 3.28084,
        miles: 0.000621371
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
        kilograms: 1,
        grams: 1000,
        pounds: 2.20462,
        ounces: 35.274
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
        'square meters': 1,
        'square kilometers': 0.000001,
        acres: 0.000247105,
        hectares: 0.0001
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
