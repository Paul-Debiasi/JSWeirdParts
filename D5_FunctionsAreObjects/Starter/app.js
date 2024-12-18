// First class function: Everything you can do with other types you can do with functions
// Assing them to variables, pass them around, create them on the fly.
// Function is a special type of object, you can attached a primitive, an object or a function to it.
// A function doesn't need to have a name, it can be anonymous.
// The code property: the code that I write is one the property we are adding to the function object. But it is invoked when the function is called.

function greet() {
  console.log('Hello')
}

greet.language = 'english'

console.log(greet.language)
