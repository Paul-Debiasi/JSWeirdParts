// Unlike other programming lang, if I passed no parameters to this function
// JS won't throw an error.

const greet = (name = 'Pablo') => {
  console.log('Hello ' + name)
}

greet('Massimo')
