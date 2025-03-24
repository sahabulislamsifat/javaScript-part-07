// const person = {
//   firstName: "Sahabul Islam",
//   lastName: "Sifat",
//   age: 22,
//   id: 1234,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
const person = {
  firstName: "Sahabul Islam",
  lastName: "Sifat",
  age: 22,
  id: 1234,
};

// console.log(person);
// console.log(person.fullName());

// person.fullName = function () {
//   return this.firstName + " " + this.lastName;
// };
person.fullName = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(person.fullName());
