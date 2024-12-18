// Function Constructor => Are available and built-in the JS engine.

// Adding method to String prototype
String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit
}

console.log('John'.isLengthGreaterThan(3))

// This is way they should not be used

var a = 3

var b = new Number(3)

console.log(a == b)
console.log(a === b)

// Array and for...in

var arrayName = ['a', 'b', 'c']
// Avoid using for...in because if change the Array prototype, it will show in the for...in loop.
for (var i in arrayName) {
  console.log(i)
}
