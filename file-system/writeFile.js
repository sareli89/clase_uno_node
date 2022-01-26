
const fs = require('fs')

function atTheEnd(err) {
    if (err) {
        console.error('Hubo un error al crear el archivo', error)
        return
    }
    console.log('El archivo fue escrito exitosamente')
}

// fs.writeFile('file', 'lo que queremos agregar', 'formato', calback-tiene que ser la mencion de una funcion-)
fs.writeFile('hola2.txt', 'Hola a todos\n desde el nuevo archivo', 'utf-8', atTheEnd )

