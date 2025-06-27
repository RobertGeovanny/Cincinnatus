// Este modulo entre otras cosas nos permite simular operaciones asincronas,
// porque contiene funciones que ejecutan un codigo luego de un cierto periodo de tiempo.

function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

function suma(a, b) {
  console.log(a + b); 
}

// setTimeout() se usa para ejecutar codigo luego de un numero especifico de milisegundos 1seg == 1000miliseg.
// Se le pasan varios parametros (El nombre de la funcion, retraso, argumentoDeLaFuncion, ...)

setTimeout(mostrarTema, 1000, 'Node.js');
setTimeout(suma, 2000, 5, 8);

// setImmediate() se utiliza para ejecutar codigo asincrono en la proxima iteracion del ciclo de eventos, osea, lo mas pronto posible
// Y se ejecuta despues de que el codigo sincrono se haya ejecutado (function, argumentodelaFuncion, ....).

console.log('Antes de setImmediate()');
setImmediate(mostrarTema, 'Node.Js');
console.log('Despues de setImmediate()');

// setInterval() se usa para ejecutar codigo un numero determinado o finito de veces con un retraso especifico de milisegundos.
// (funcion, intervalo, argumentodelaFuncion, ....)

setInterval(mostrarTema, 1500, 'Node.js');