const params = require('yargs-parser')(process.argv.slice(2))
// console.log('params: ', params)
const colors = require('colors')
const nombres = [
    'Carlos',
    'Sara',
    'Erik',
    'Ivonne',
    'Alberto',
    'Leo',
    'Alex',
    'Airy',
    'freddy',
    'Jose'
  ]

  const koderName = params.name
  const exists = nombres.includes(koderName)

if (exists) {
    console.log('El nombre existe'.green)
} else {
    console.log('Mi no conocerlo'.red)
}

//declaracion / definicion
// function alTerminar(){}
// function alTerminar () -> {}

// llamada de funcion
alTerminar()

// referencia a la funcion
alTerminar