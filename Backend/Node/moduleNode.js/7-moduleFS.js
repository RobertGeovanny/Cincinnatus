// Nos permite trabajar con el sistema de archivos. Todos los metodos de este modulo son asincronos por defecto.
// Pero puedes escoger versiones sincronas de sus metodos al agregarle Sync

const fs = require('fs');

// Nos permite leer archivos y recibe 3 parametros, en el 3 argumento se va a llamar a la funcion que especifiquemos en el 3 argumento
/* fs.readFile('7-index.html', 'utf-8', (err, contenido) => {
  if (err) {
    console.log(err);
  } else {
    console.log(contenido);
  }
}); */

/* fs.rename('7-index.html', '7-main.html', (err) => {
  if (err) {
    throw err;
  } 
  console.log('Cambiado exitosamente...')
}) */

// appendFile nos permite agregar contenido al final de un archivo o crear un archivo si no existe en la ubicacion que indicamos
/* fs.appendFile('7-index.html', '<p>Hola</p>', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo actualizado');
}) */

// Reemplaza todo el contenido de un archivo
fs.writeFile('index.html', 'Contenido nuevo', (err) => {
  if (err) {
    throw err;
  }
  console.log('Contenido reemplazado exitosamente')
})