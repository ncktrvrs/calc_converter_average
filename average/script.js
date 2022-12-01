let firstNumber;
let secondNumber;
let thirdNumber;

function average(a, b, c) {
  return (a + b + c) / 3;
}

do {
  firstNumber = +prompt("Enter first number");
} while (Number.isNaN(firstNumber) == true);

do {
  secondNumber = +prompt("Enter second number");
} while (Number.isNaN(secondNumber) == true);

do {
  thirdNumber = +prompt("Enter third number");
} while (Number.isNaN(thirdNumber) == true);

let result = average(firstNumber, secondNumber, thirdNumber)

alert(`The average of ${firstNumber}, ${secondNumber}, ${thirdNumber} is ${result}`);

