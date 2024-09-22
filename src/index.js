// const { system } = require('./objects')// Importamos el objeto
//const { getTitle, getAuthor } = require('./functions')// Importamos las funciones

import { system } from './objects.js'
import { getTitle, getAuthor } from './functions.js'

// Mostramos el sistema
console.log(`${system.nombre} - ${getTitle()} - ${getAuthor(system.author)}`)