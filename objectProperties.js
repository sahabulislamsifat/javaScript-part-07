// const person = {
//   names: "Sifat",
//   age: 22,
// };

// person.country = "Bangladesh";

// let a = "age";
// // console.log(person);
// console.log(person["age"]);
// console.log(person[a]);

// const person = {
//   firstName: "Sahabul Islam ",
//   lastName: "Sifat ",
//   age: 22,
// };

// let text = "";
// for (let x in person) {
//   text += person[x];
// }

// console.log(text);

const person = {
  fistName: "Sahabul Islam ",
  lastName: "Sifat ",
  age: 22,
};

// let text = "";
// for (let x in person) {
//   text += person[x];
// }

// console.log(text);

// delete person.age;
delete person["age"];
console.log(person);
