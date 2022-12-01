function sum(a, b) {
  result = a + b;
  alert(`The result of summing is: ${result}`);
}

let firstNumber;
do {
  firstNumber = +prompt("Enter the first number");
} while (Number.isNaN(firstNumber) == true);

let secondNumber;
do {
  secondNumber = +prompt("Enter the second number");
} while (Number.isNaN(secondNumber) == true);

sum(firstNumber, secondNumber);
