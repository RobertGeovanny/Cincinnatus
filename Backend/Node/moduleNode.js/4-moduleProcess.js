// Permite obtener informacion sobre los procesos que esta ejecutando Node y tener cierto control sobre dicho proceso.

// console.log(process); // Nos da un monton de informacion sobre node: su version, plataforma en la que se ejecuta, etc.

// console.log(process.env) // Nos dice el ambiente de ejecucion del programa

/* console.log(process.argv[2]); // Nos permite pasar argumentos y los transforma en un arreglo.
console.log(process.argv[3]);  */
// [node, 4-moduleProcess.js, 6, 7]
// [ 0            1           3  4]

// Para pasar un numero indefinido de elementos usamos un ciclo for
/* for (let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i]);
} */

// Sirve para saber cuanta memoria se esta usando.
console.log(process.memoryUsage());