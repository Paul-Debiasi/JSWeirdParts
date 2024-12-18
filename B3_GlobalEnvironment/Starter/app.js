// Execution Context
// Global Execution Context creates a global object and create a special variable called 'this' that points to the global object
console.log(this)
console.log(window)

var a = 'Hello A'
var b = 'Hello B'
const c = 'Hello C'

console.log(this.a)
console.log(this.b)
console.log(this.c)

{
  var d = 'Hello D'
  console.log(this.d)
}
