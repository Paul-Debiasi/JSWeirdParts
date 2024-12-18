// Closure => a function that returns a function, closure are feature of the javascript programming language.
// Is the Javascript engine allow us to have access in memory to the supposed to be gone

function greet(whattosay) {
  // Even though the greet execution context is gone, any function created inside of it when they're called will still have a reference
  // to the greet function memory or it execution context memory space
  return function (name) {
    console.log(`${whattosay} ${name}`)
  }
}

greet('Hello')('Tony')

// using a variable
var hello = greet('Hello')
hello('John')
