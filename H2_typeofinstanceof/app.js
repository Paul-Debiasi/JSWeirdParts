// typeof => operator that returns the type of a variable

var a = 3
console.log(typeof a)

var b = 'Hello'
console.log(typeof b)

var c = {}
console.log(typeof c)

var d = []
console.log(typeof d) // weird! It is an object
console.log(Object.prototype.toString.call(d)) // better! it return [object Array]

function Person(name) {
  this.name = name
}

var e = new Person('Jane')
console.log(typeof e)
// instanceof it tells me if any object down the prototype chain is an instance of Person.
// It returns true or false (boolean)
console.log(e instanceof Person)

console.log(typeof undefined) // makes sense
console.log(typeof null) // a bug since, like, forever...

var z = function () {}
console.log(typeof z)
