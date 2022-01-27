  /**
 * Usando funciones asicronas de promesas (fsPromises)
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */

const fs = require('fs/promises')

const newFile = './textHola.txt'



  // fsPromises.writeFile(file, data[, options])
    
fs.writeFile(newFile, 'hola, aprender y tu?', 'utf-8')
    .then( () => {
        console.log('Archivo creado')
        fs.appendFile(newFile, '\n linea nueva otra vez', 'utf-8')
            .then( () => {
                console.log('Se agrego al archivo')
                setTimeout( () => {
                    fs.unlink(newFile)
                    .then( () =>{
                        console.log('El archivo ha sido eliminado')
                    })
                }, 5000) 
            })
    })
    .catch(error =>{  
        console.error('ERROR: ', error)
    })

    async function main () {
        await fs.writeFile(newFile, 'ejemplo async await', 'utf8')
        await fs.appendFile(newFile, '\n linea nueva', 'utf-8')
        setTimeout( () => {
            fs.unlink(newFile)
            console.log('Se ha eliminado el archivo')
        }, 5000)
    }

main()
    .then( () => {
        console.log('FIN (async await)')
        
    })
    