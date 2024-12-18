const person = new Object()

person['firstname'] = 'Tony'
person['lastname'] = 'Alicea'

console.log(person['firstname'])
console.log(person.lastname)
console.log(person)

person.address = new Object()
person.address.street = '111 Main St.'
person.address.city = 'New York'
person.address.state = 'NY'

console.log(person.address.street)
console.log(person.address.city)
console.log(person['address']['state'])

console.log(person)
