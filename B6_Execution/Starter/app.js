// Single threaded => one command at a time
// Synchronous => one line at a time (in order)
// function b() {
//   console.log('Called b!')
// }

// b()

// console.log(a)

// var a = 'Hello World!'

function c() {
  console.log('Called c!')
}

function d() {
  c()
  console.log('About to call c')
}

function e() {
  console.log('E was called')
  d()
}

e()
