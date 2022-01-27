const { error } = require('console')
const fs = require('fs')

function notAppend(err) {
    if (err) {
        console.log('No funciona: ', error)
        return
    }
    console.log('El archivo se ha agregado')
}

fs.appendFile('./hola2.txt', 'Usando appendFile por primera vez', notAppend )

