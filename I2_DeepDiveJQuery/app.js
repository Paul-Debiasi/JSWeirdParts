// var q = $('ul.people li')
// console.log(q)

function toCamelCase1(str) {
  return str.replace(/[-_](\w)/g, function (g) {
    console.log(g)
    return g[1].toUpperCase()
  })
}

const toCamel1 = toCamelCase1('camel-case-string_more')

console.log(toCamel1)

function toCamelCase2(str) {
  return str
    .split(/[-_]/)
    .map((word, index) => {
      return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
}

const toCamel2 = toCamelCase2('camel-case-string_more')

console.log(toCamel2)

const vowels = ['a', 'e', 'i', 'o', 'u']

function disemvowel(str) {
  for (let i = o; i < str.length; i++) {}
  return str
}

console.log(disemvowel('alarm la maison'))
