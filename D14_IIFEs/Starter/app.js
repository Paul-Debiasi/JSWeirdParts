// Using a function declaration
function greet(name) {
  console.log('Hello ' + name)
}

// Using a function expression
var greet = function (name) {
  console.log('Hello ' + name, 'From function expression')
}

greet('John')

// Usin an Immediately Invoked Function Expression (IIFE)
const greeting = (function (name) {
  return 'Hello ' + name
})('John')

console.log(greeting, 'From IIFE')

;(function (name) {
  console.log('Hello ' + name, 'From IIFE')
})('Brad')
