const tony = {
  firstname: 'Tony',
  lastname: 'Alicea',
  address: {
    street: '111 Main St.',
    city: 'New York',
    state: 'NY',
  },
}

const greeting = (person) => {
  console.log(`Hello ${person.firstname} ${person.lastname}`)
}

greeting(tony)

greeting({
  firstname: 'Mary',
  lastname: 'Doe',
})
