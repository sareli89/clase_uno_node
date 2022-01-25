// import { readFile } from 'fs';

const fs = require('fs')

const holaFile = './hola.txt' 

// let data = fs.readFile( holaFile )
console.log(holaFile.toString())
fs.readFile( holaFile, 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})


// fs.readFile( holaFile, (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data.toString())
// })

// Da como resultado un buffer
// fs.readFile( holaFile, (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data)
// })