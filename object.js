// Mutable and Imutable

// const person = {
//   names: "Sifat",
//   age: 22,
// };
// person.names = "Bangladesh";

// let number = 3;
// number = 4;

// Literal Syntax
const person = {
  names: "Sifat",
  age: 22,
  getName: function () {
    return "Sifat";
  },
};

const person2 = person;
person.age = 36;

console.log(person);

// console.log(person2);
