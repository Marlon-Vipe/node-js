// ************* Manipular archivos  ************
const fs = require("fs"); // File System

const file = fs.readFileSync("newfile.txt", "utf-8"); // Lee el archivo

const fileMofidied = file.replace(/Node.js/ig, 'NodeJS'); // Reemplaza el texto

fs.writeFileSync("newfilemodified2.txt", fileMofidied); // Escribe el archivo
