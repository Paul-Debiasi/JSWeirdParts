// Variable Environment => Where the variables are stored and how they relate to each other in memory
// Scope => Where the variables are accessible, or where are able to see them.
function b() {
  var myVar
  console.log(myVar)
}

function a() {
  var myVar = 2
  console.log(myVar)
  b()
}

console.log(myVar)
var myVar = 1
console.log(myVar)
a()
