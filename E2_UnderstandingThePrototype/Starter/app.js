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

// For demo pourposes only
john.__proto__ = person

console.log(john.getFullName())

var jane = {
  firstname: 'Jane',
}

// For demo pourposes only
jane.__proto__ = person

console.log(jane.getFullName())
