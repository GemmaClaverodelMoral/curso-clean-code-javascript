//> Herencia prototipal

// Clase padre antes de ES6
function Person(name) {
  this.name = name;
}

var person = new Person('Alex')
console.log(person.name)

// Person.prototype.greet = function () {
//   return "Hello I am " + this.name;
// };

// // Herencia ES5
// function Developer(name) {
//   this.name = name;
// }

// Developer.prototype = Object.create(Person.prototype);

// Developer.prototype.writeCode = function (coffee) {
//   if (coffee) {
//     console.log("I am developing new feature");
//   } else {
//     console.log("I need coffeeee");
//   }
// };

// var dev = new Developer("Alex");
// dev.greet(); //> Hello I am Alex
// dev.writeCode(); //> I need coffeeee

// //> Herencia clases
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello I am ${this.name}`;
//   }
// }

// // ES6
// class Developer extends Person {
//   constructor(name) {
//     super(name);
//   }

//   writeCode(coffee) {
//     coffee
//       ? console.log("I am developing new feature")
//       : console.log("I need coffeeee");
//   }
// }

// const dev2= new Developer("Alex");
// dev2.greet(); //> Hello I am Alex
// dev2.writeCode(); //> I need coffeeee
