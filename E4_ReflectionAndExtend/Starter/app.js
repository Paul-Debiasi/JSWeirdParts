// Reflection => An obj can look at itself, listening and changing its own properties and methods.
var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function () {
    return this.firstname + ' ' + this.lastname
  },
}

var john = {
  firstname: 'John',
  lastname: 'Doe',
}

// don't do this EVER! for demo purposes only!!!
// john.__proto__ = person

// Reflection example

for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(`${prop} : ${john[prop]}`)
  }
}

// Using the underscore library

var Jane = {
  address: '111 Main St.',
  getFormalFullName: function () {
    return this.firstname + ' ' + this.lastname
  },
}

var Jack = {
  getFirstName: function () {
    return this.firstname
  },
}

_.extend(john, Jane, Jack)

console.log(john)
