// Function constructurs, "new", and the history of JS
// Another way of creatig an obj using the "new" keyword
// The "new" keyword => Is an operator introduced to attracted Java developer to Js

// Person Constructor

// Function Constructor => A functions used to create objects. The 'this' keyword is pointing to a new empty obj
// and that obj is returned from the function automatically

function Person(firstName, lastName, age) {
  console.log(this)
  this.firstName = firstName
  this.lastName = lastName
  this.age = age || 'I prefer not to say'
  console.log('This function was invoked', this)
  this.getFullName = function (address) {
    return this.firstName + ' ' + this.lastName + ' lives in ' + address
  }
}

// When we used 'new' immeditely an empty obj is created and then it invokes the function
// In this specific case the 'this' keyword points to the empty obj
// As long as we don't return anything form the function it will return our obj as a result
var jack = new Person('Jack', 'Sparrow', 45)

var jane = new Person('Jane', 'Wayne')

console.log(jack)
console.log('-------------------')
console.log(jane.getFullName('New York'))
