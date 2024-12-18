// Callback fucntions => Are functions you give to another function, to be run when the other fucntion is finished.

function sayHiLater() {
  var greeting = 'Hi!'

  setTimeout(function () {
    console.log(greeting)
  }, 3000)
}

sayHiLater()

// JQuery uses fucntion expressions and first-class functions! (first-class fucntions are func the can be treated like variables, be assigned to variables, etc.)

// Example
//$("button").click(function () {
//  console.log('click event!')
//})

// Callback Example

function tellMeWhenDone(callback) {
  var a = 1000 // some work
  var b = 2000 // some work
  callback() // the 'callback', it runs the function I give it!
}

tellMeWhenDone(function () {
  console.log('Done!')
})
