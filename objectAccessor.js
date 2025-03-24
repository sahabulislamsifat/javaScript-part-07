// const person = {
//   firstName: "Sahabul Islam",
//   lastName: "Sifat",
//   age: 23,
//   language: "English",
//   get lang() {
//     return this.language;
//   },
// };

// console.log(person.lang);
// const person = {
//   firstName: "Sahabul Islam",
//   lastName: "Sifat",
//   age: 23,
//   language: "",
//   set lang(lang) {
//     return (this.language = lang);
//   },
// };

// person.lang = "Bangla";

// console.log(person);

const person = {
  firstName: "Sahabul Islam",
  lastName: "Sifat",
  id: 32145,
};

person.age = 22;
Object.defineProperty(person, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
});

// console.log(person);
console.log(person.fullName);
