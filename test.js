const decrementSeconds = require('./src/services/countdown.js')

function assert(a, b) {
  if (a !== b) {
      throw new Error(`Error ${a} is not equal to ${b}`);
  }

  console.log(`whou hou : ${a} is equal to ${b}`);
}


assert(decrementSeconds(30, 9).seconds, 8);
assert(decrementSeconds(30, 0).seconds, 59);
assert(decrementSeconds(30, 0).minutes, 29);
assert(decrementSeconds(0, 0).minutes, 0);
assert(decrementSeconds(0, 0).seconds, 0);
assert(decrementSeconds(-1, 0).minutes, 0);
assert(decrementSeconds(0, -9).seconds, 0);
assert(decrementSeconds(-9, -9).seconds, 0);

let second = 10;

decrementSeconds(10, second);

assert(second, 10);


let minutes = 15;

decrementSeconds(minutes, 0);

assert(minutes, 15);