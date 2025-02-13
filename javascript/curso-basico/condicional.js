// condicionales

// if
/* var a = 22;
var b = 20;
if (a > b) {
    console.log(`${a} es mayor a: ${b}`)
}
if (a == b) {
    console.log(`${a} es igual a: ${b}`)
}
else {
    console.log(`${a} es menor a: ${b}`)
} */

/* operrador logico
&& = Y: devuelve verdadero si todas las condiciones se cumplen,
de lo contrario, devuelve falso.

|| = OR: devuelve verdadero al menos una condicion verdadera,
de lo contrario, devuelve falso.*/

/* var x = true;
var y = false;
console.log( x && y );
console.log( x || y );

var a = 8;
var b = 4;
var c = 6;
if (a > c && a > b){
    console.log(`${a} es mayor a: ${b}`)
}
else {
    console.log(`${a} es mayor a: ${c}`)
} */

let curso = "python";

switch (curso) {
    case 'java':
        console.log("java");
        break;
    case 'python':
        console.log("python");
        break;
    case 'javascript':
        console.log("javascript");
        break;
    default:
        console.log("no disponible");
        break;
}