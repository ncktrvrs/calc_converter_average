function sum(a, b) {
  return a + b;
}

let firstNumber;
do {
  firstNumber = +prompt("Enter the first number");
} while (Number.isNaN(firstNumber) == true);

let secondNumber;
do {
  secondNumber = +prompt("Enter the second number");
} while (Number.isNaN(secondNumber) == true);

let result = sum(firstNumber, secondNumber);

alert(`The result of summing is: ${result}`);

