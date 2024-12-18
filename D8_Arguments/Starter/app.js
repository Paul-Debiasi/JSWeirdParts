// During the Execution Context phase, beside the Variable Environment, the this keyword and the Outer Environment
// is created as well another special keyword called 'arguments'. Contains a list all the value that we passaed to the function.
// Is just another name to the parameters we are passing to the function.

function greet(firstname, lastname, language) {
  // language = language || 'en';

  if (arguments.length === 0) {
    console.log('Missing parameters!')
    console.log('-------------')
    return
  }

  console.log(firstname)
  console.log(lastname)
  console.log(language)
  console.log(arguments)
  console.log('arg 0: ' + arguments[1])
  console.log('-------------')
}

greet()
greet('John')
greet('John', 'Doe')
greet('John', 'Doe', 'es')
