const x = 1;

const y = x + 2;

console.log("Sum is " + y);

// Call Stack
// ----------
// main() is removed from the call stack
// log('Sum is 3') is logged and removed from the Call stack
// main() function is called

const listLocations = (localtions) => {
  locations.forEach((location) => {
    console.log(location);
  });
};

const myLocations = ["Philly", "NYC"];

listLocations(myLocations);

// Call Stack
// ----------
// main() is removed from the call stack
// anonymous function is removed from the Call stack
// console.log('NYC') is removed from the Call stack
// console.log('NYC') logs to the console
// anonymous('NYC')
// console.log('Philly') is removed from the Call stack
// console.log('Philly') logs to the console
// anonymous('Philly')
// forEach(...)
// listLocations functions([..]) is added to the call stack
// main() function is called

console.log("Starting...");

setTimeout(() => {
  console.log("1 second timer");
}, 1000);

setTimeout(() => {
  console.log("0 second timer");
}, 0);

console.log("Finishing up!");

// Call Stack
// ----------
// main() is removed from the call stack
// console.log("1 second timer") is removed from the Call stack
// console.log("1 second timer") logs to the console
// console.log("0 second timer") is removed from the Call stack
// console.log("0 second timer") logs to the console
// console.log('Finishing up!') is removed from the Call stack
// console.log('Finishing up!') logs to the console
// setTimeout(0 sec) is added to the Callback Queue
// setTimeout(0 sec) gets run by the Node API in C++ (Non-Blocking Code)
// setTimeout(..., 0) is added to the call stack
// setTimeout(1 sec) is added to the Callback Queue
// setTimeout(1 sec) gets run by the Node API in C++ (Non-Blocking Code)
// setTimeout(..., 1000) is added to the call stack
// console.log('Starting up...') is removed from the Call stack
// console.log('Starting up...') logs to the console
// main() function is called
