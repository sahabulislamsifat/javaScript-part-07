// const person = {
//   names: "Sifat ",
//   age: 22,
//   call: " 01632165523",
// };

// console.log([person]);
// document.getElementById("demo").innerHTML =
//   person.names + " " + "is " + person.age + "years old.";

// let text = "";
// for (let x in person) {
//   text += person[x];
// }

// document.getElementById("demo").innerHTML = text;

// const personArray = Object.values(person);

// for (x of personArray) {
//   console.log(x);
// }

// console.log(personArray);

const person = {
  names: "Sifat ",
  age: 22,
  call: " 01632165523",
  date: new Date(),
};

console.log(JSON.stringify(person));
