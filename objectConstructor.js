function Person(first, last, age) {
  (this.firstName = first), (this.lastName = last), (this.age = age);
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const sifat = new Person("Sahabul Islam", " Sifat", 22);
const ashik = new Person("Ashik", " Billa", 24);
const sajul = new Person("Sajul", " Islam", 28);

// console.log(sifat.fullName());
// console.log(ashik.fullName());
// console.log(sajul.fullName());

Person.prototype.country = "Bangladesh";

// console.log(sifat.country);
// console.log(ashik.country);
// console.log(sajul.country);
