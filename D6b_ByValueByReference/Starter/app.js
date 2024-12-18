// By Value (all primitive types) => When a=3 and b=a, been 3 a primitive value, b is a reference to the value of a. Is pointing a copy of the value of a in memory.
// By Reference => When a={} and b=a, been a an object, b is a reference to the object in memory. Is pointing to the same object in memory.

// By Value
var a = 3
var b
// b will be 3 and a will also be 3 but just copies of the value.
b = a

// Change the value of a won't change the value of b
a = 2

console.log(a)
console.log(b)

// By Reference
var c = { greeting: 'hi' }
var d

d = c
c.greeting = 'hello' // mutate

console.log(c)
console.log(d)

// By Reference (as parameters)
function changeGreeting(obj) {
  obj.greeting = 'Hola' // mutate
}

changeGreeting(d)
console.log(c)
console.log(d)

// Equals operator sets up new memory space (new address). Is a new object.
c = { greeting: 'howdy' }
console.log(c)
console.log(d)
