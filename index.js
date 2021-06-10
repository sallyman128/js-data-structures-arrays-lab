// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver) {
  drivers.push(driver);
}

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver);
}

function destructivelyRemoveLastDriver(driver) {
  drivers.pop();
}

function destructivelyRemoveFirstDriver(driver) {
  drivers.shift();
}

function appendDriver(driver) {
  // drivers.concat(driver);
  return [...drivers, driver];
}

function prependDriver(driver) {
  return [driver, ...drivers];
}

function removeLastDriver(driver) {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver(driver) {
  return drivers.slice(1);
}