// const { system } = require('./objects')// Importamos el objeto
//const { getTitle, getAuthor } = require('./functions')// Importamos las funciones

//import { system } from './objects.js'
//import { getTitle, getAuthor } from './functions.js'
import { config } from 'dotenv'; // Importamos la funcion config de dotenv
import env from 'env-var' // Importamos la libreria env-var

// Mostramos el sistema

//console.log(`${system.nombre} - ${getTitle()} - ${getAuthor(system.author)}`)
config() // Cargamos las variables de entorno

const PORT = env.get('PORT').asPortNumber() // Obtenemos la variable de entorno PORT

console.log(process.env.PORT) // Mostramos la variable de entorno PORT