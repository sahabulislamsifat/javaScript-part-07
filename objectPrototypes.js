function Person(first, last, age) {
  (this.firstName = first), (this.lastName = last), (this.age = age);
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const sifat = new Person("Sahabul Islam", " Sifat", 22);
const ashik = new Person("Ashik", " Billa", 24);
const sajul = new Person("Sajul", " Islam", 28);

Person.prototype.country = "Bangladesh";

const names = "Sifat";
String.prototype.doingFun = function () {
  return "I am doing fun";
};

const x = "Bangladesh";

console.log(x.doingFun());
