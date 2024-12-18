// Functional Programming => We fink and code in term of functions

var arr1 = [1, 2, 3]
console.log(arr1)

var arr2 = []

for (var i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2)
}

// Example of functional programming

function mapForEach(arr, fn) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]))
  }
  return newArr
}

var arr2 = mapForEach(arr1, function (item) {
  return item * 2
})

console.log(arr2, 'On line 22')

var arr3 = [2, 5, 34, 8, 2, 4, -1, 6]

var arr3Result = mapForEach(arr3, function (item) {
  return item <= 2
})

console.log(arr3Result, 'On line 34')

var checkPastLimit = function (limiter, item) {
  return limiter > item
}

var arr4 = mapForEach(arr3, checkPastLimit.bind(this, 3))

console.log(arr4, 'On line 42')
