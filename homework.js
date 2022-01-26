/**
 * Usando funciones asicronas
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */

// const fs = fs.require('fs')

// const pathHola = './hola3.txt'

// fs.writeFile(pathHola, 'Hola, Adios', 'utf-8', (error) => {
//     if (error) {
//         console.error('No se pudo crear el archivo')
//         return
//     }

//     fs.appendFile(pathHola, 'Usando appendFile', (error) => {
//         if (error) {
//             console.error('No se pudo agregar al archivo')
//             return
//         }

//         setTimeout( () => {
//             fs.unlink(holaFile, (error) => {
//                 if(error) {
//                     console.error('No se pudo borrar')
//                     return
//                 }
//                 console.log('Ya me fui')
//             })
//         }, 5000)
//     })
// })
// function holaFile(file, unaFuncion){
//     fs.writeFile(pathHola, 'utf-8', atTheEnd )


// }

/* intento */
// function appendToFile(file, unaFuncion) {
//     setTimeout( () => {
//         fs.appendFile(pathHola, 'Usando appendFile', notWorking)
//         unaFuncion(null, file)
//     }, 5000)
//     unlink(pathHola, unaFuncion)
// }

// function unlink(err) {
//     if (err) {
//         console.log('Algo no esta funcionando: ', err)
//         return
//     }
//     console.log('el archivo se a eliminado')
// }


/**
 * 1- crear un archivo
 * 2- agregar una segunda linea
 * 3- despues de 5 segundos se borra el archivo
 */
const fs = require('fs')

const filePath = 'voy-a-morir-js'

// paso 1
fs.writeFile(filePath, 'Hola! no me queda mucho tiempo', 'utf8', (error) => {
  if(error) {
    console.error('No se pudo crear el archivo')
    return
  }

  // paso 2
  fs.appendFile(filePath, 'Tengo algo importante que decirte...', (error) => {
    if (error) {
      console.error('No se pudo Agregar al archivo')
      return
    }

    // paso 3
    setTimeout(() => {
      fs.unlink(filePath, (error) => {
        if (error) {
          console.error('No se pudo borrar');
          return
        }
        console.log('Adios popo')
      })
    }, 5000)

  })

})






