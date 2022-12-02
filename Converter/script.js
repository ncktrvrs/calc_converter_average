const secondsInOneHour = 3600;

function timeConverter(hours) {
  return hours * secondsInOneHour;
}

let hours;
do {
  hours = +prompt("Enter how many hours do you want to convert?");
} while (hours < 0 || Number.isInteger(hours) == false);

const result = timeConverter(hours);

alert(`${hours} hours contains ${result} seconds`);