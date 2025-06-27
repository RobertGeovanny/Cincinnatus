// Contiene funcionalidades para obtener informacion sobre el sistema operativo en el cual se ejecuta la aplicacion.
// No es un modulo global por lo que tendras que importarlo
const os = require('os'); // Recuerda por convencion los modulos se asignan a una constante

console.log(os.type()); // Nos indica el sistema operativo en el que nos encontramos

// Para acceder al directorio principal del sistema 
console.log(os.homedir());

// Nos indica cuanto tiempo se ha estado ejecutando el sistema operativo
console.log(os.uptime());

// Nos da informacion sobre el usuario
console.log(os.userInfo());