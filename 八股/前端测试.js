function Person(name) {
    this.name = name;
  }
  
const person1 = new Person('abc');
const person2 = { name: 'def' };

// console.log(person1.__proto__ === Person.prototype)
// console.log(Person.prototype.__proto__ === Object.prototype)
// console.log(person2.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)

// console.log(Person.__proto__ === Function.prototype)
// console.log(Object.__proto__ === Function.prototype)

// console.log(Function.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.toString.call('adad'))
