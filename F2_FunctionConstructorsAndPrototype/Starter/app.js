// Every function has a prototype that starts of as an empty obj. Used only by the new operator.
// The prototype on a function is not the prototype of the function but it's the prototype of any obj created if
// we are using the function as a constructor

function Person(firstname, lastname) {
  console.log(this)
  this.firstname = firstname
  this.lastname = lastname
  console.log('This function is invoked.')
}

Person.prototype.getAddress = function (address) {
  return address
}

var john = new Person('John', 'Doe')

var jane = new Person('Jane', 'Doe')

console.log(john.getAddress('123 Main St.'))

// Function and 'new' => If I forget to the 'new' key word it will return undefined.This is why we use a capital letter
// for constructor functions
