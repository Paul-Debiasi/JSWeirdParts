// The execution context is created in 2 phases,
// 1. Creation => gave us access to the global object and the this keyword
// It sets up memory space for the variables and functions 'hoisting'. Those funstions and variables exists only in memory space.
// This is called 'hoisting' and the reason why we can access them before they are declared.
//  In this case we have access to a placeholder 'undefined' because we don't have access the real value yet.
// 2. Execution

b()

var a = 'Hello World!'
console.log(a)

function b() {
  console.log('Called b!')
}
