// Object.create() => Its possible to create a new object using the Object.create() method.
// The Object.create() method creates a new object, using an existing object as the prototype for the newly created object

var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function () {
    return `Hi ${this.firstname}`
  },
}

var john = Object.create(person)
john.firstname = 'John'
john.lastname = 'Doe'
console.log(john.greet())
