// How we can use closures to our advantage

function makeGreeting(language) {
  console.log(language)
  return function (firstname, lastname) {
    // This function has always access to the language variable
    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname)
    }

    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname)
    }
  }
}

var greetEnglish = makeGreeting('es')

greetEnglish('John', 'Doe')
