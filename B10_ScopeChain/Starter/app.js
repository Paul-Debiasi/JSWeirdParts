// Scope Chain => Every execution context has a reference to its outer environment.
// The outer environment for functions is the global environment. If I have a function inside a function,
// the outer environment for that function is the the execution context of the function that contains it.

function a() {
  function b() {
    var myVar = 1
  }
  myVar = 2
  b()
  return console.log(myVar)
}

a()
