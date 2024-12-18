// JSON => Javascript Object Notation: Is a string of data
// Is inspired by Obj literal notation

var objLiteral = {
  fName: 'Mary',
  isProgrammer: true,
}

console.log(JSON.stringify(objLiteral))

var jsonParsed = JSON.parse('{"fName": "Mary", "isProgrammer": true}')

console.log(jsonParsed)
