function sum(a, b) {
  return a + b;
}

function subtraction (a, b) {
  return a - b;
}

function multiplication (a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

let firstNumber;
do {
  firstNumber = +prompt("Enter the first number");
} while (Number.isNaN(firstNumber) == true);

let secondNumber;
do {
  secondNumber = +prompt("Enter the second number");
} while (Number.isNaN(secondNumber) == true);

alert(`${firstNumber} + ${secondNumber} = ` + sum(firstNumber, secondNumber) +
  `\n${firstNumber} - ${secondNumber} = ` + subtraction(firstNumber, secondNumber) +
  `\n${firstNumber} * ${secondNumber} = ` + multiplication(firstNumber, secondNumber) +
  `\n${firstNumber} / ${secondNumber} = ` + division(firstNumber, secondNumber));

