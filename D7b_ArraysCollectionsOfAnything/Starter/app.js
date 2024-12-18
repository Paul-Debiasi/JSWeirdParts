// Arrays => arrays in Javascript are dinamically typed. That means that they can hold any type of value.

// Example

const arr = [
  1,
  false,
  { name: 'Tony', address: '111 Main St.' },
  function (name, question) {
    var greeting = 'Hello'
    console.log(`${greeting} ${name} ${question}`)
  },
  'How are you?',
]

arr[3](arr[2].name, arr[4])

// Output: Hello Tony How are you?
