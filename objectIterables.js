// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let x of numbers) {
//   console.log(x);
// }

const myNumbers = {};

// make it iterators
myNumbers[Symbol.iterator] = function () {
  let num = 0;
  let done = false;
  return {
    next() {
      num += 10;
      if (num == 100) {
        done = true;
      }
      return { value: num, done: done };
    },
  };
};

for (let numb of myNumbers) {
  console.log(numb);
}
