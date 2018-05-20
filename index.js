function printBadges(employees) {
  for(let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`)
  }

  return employees;
}
function coinFlip() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let tailsCount = 0

  while(coinFlip()) {
    ++tailsCount;
  }

  return `You got ${tailsCount} tails in a row!`;
}
