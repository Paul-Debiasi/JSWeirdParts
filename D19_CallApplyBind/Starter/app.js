// All functions has access to special methods like call, apply and bind. The 3 of them has to do with the 'this' keyword.

var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function () {
    let fullName = this.firstname + ' ' + this.lastname
    return fullName
  },
}

// I could bind this function to any object directly on the fly
var logName = function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName())
  console.log('Arguments: ' + lang1 + ' ' + lang2)
  console.log('-----------')
}.bind(person)

// In this case I'm useing the logName func as object and invoking the build-in bind method on it.
// The bind method create a copy of the logName function, and uses the this keyword to point to the person object.
var logPersonName = logName.bind(person)

logPersonName('en', 'es')

// Call is a way to invoke a function with a given this (in this case the person object) keyword and arguments.
// It's the same as using the bind method, but without creating a copy of the function.

logName.call(person, 'it', 'de')

// Apply is a way to invoke a function with a given this (in this case the person object) keyword and arguments.
// It's the same as using the call method, but with an array of arguments.

logName.apply(person, ['it', 'de'])

// Real life example: function borrowing

var person2 = {
  firstname: 'Jane',
  lastname: 'Johnson',
}

// I borrow the getFullName method from the person object not present in the person2 object. I can do that as long I have similar propertie names
console.log(person.getFullName.apply(person2))

// Real life example2: function currying => Creating a copy of a function but with some preset parameters

function multiply(a, b) {
  return a * b
}

// I this case the bind is permanently setting the fist parameter (a) to the value of 2.
// It will always be 2 * b in the multiply function.
// fucntion multiply( b) {
//   var a = 2
//   return a * b }
// If I passed a second parameter to the bind method: multiply.bind(this, 2, 3). a alsways be 2. b will always be 3
var multiplyByTwo = multiply.bind(this, 2)

// Remember that 4 in this case is var (b) and there is no need to add a second parameter.
multiplyByTwo(4)
