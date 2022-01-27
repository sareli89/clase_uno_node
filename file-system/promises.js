/**
 * Construir un muro
 * 
 * - Construir
 * - Aplanar
 * - Pintar
 */

/* Promesas
new Promise( (resolve, reject) => {}
resolve -> una funcion que vamos a ejecutar cuando la promesa debe de pasar de pendiente a resuelta 
reject -> una funcion que vamos a ejecutar cuando la promesa debe de pasar de pendiente a rechazada

*/

 const muro = {
    construido: false,
    aplanado: false,
    pintado: false
  }
  


/* CALLBACK
  function construir (unMuro, unaFuncion) {
    setTimeout(() => {
      unMuro.construido = true
      unaFuncion(null, unMuro)
    }, 2000)
  } */

  function construir (unMuro) {
    setTimeout(() => {
      unMuro.construido = true
    }, 2000)
  }
  
  function construir (unMuro) {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        unMuro.construido = true

        if (!unMuro.construido) {
          reject(new Error('No se pudo construir'))
          return
        }
        resolve(unMuro)
        }
      }, 2000)
    })
  }
  
  function aplanar (unMuro) {
    setTimeout( () => {
      unMuro.aplanado = true
      if ( !unMuro.aplanado) {
        reject(new Error('No se pudo aplanar'))
        return
      }
      resolve(unMuro)
    }, 2000)
  }
  
  function pintar (unMuro) {

    setTimeout( () => {
      if ( !unMuro.aplanado) {
        reject(new Error('No se pudo aplanar'))
        return
      }
      resolve(unMuro)
    }, 2000)
  }
  
  construir(muro) 
    .then((muroConstruido)=> {

    }) 
      console.log('muroConstruido: ', muroConstruido)
      aplanar(muroConstruido)
        .then(muroAplanado) => {
          console.log(muroAplanado)
          pintar(unMuro)
        }
        
    }


    /* async await
    
    async -> palabla reservada que ocupamos para marcar una funcion asincrona (toda aquella que usa await inernamente)
    await -> palabra reservada que esamos para esperar la resolucion de una promesa
    */
   async function principal () {
     const muroConstruido = await construir(muro)
     const muroAplanado = await aplanar(muroConstruido)
     const muroPintado = await pintar(muroAplanado)
     console.log('muroPintado: ', muroPintado)
   }

   principal()
    .then( () => {
      console.log('FIN')
    })
    .construido( (error) => {
      console.error('ERROR: ', error)
    })