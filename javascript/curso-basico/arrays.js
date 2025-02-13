// arrays

var numeros = [1,2,3,4,5];
console.log(numeros);

var estudiantes = ["David","Ana","Carla"];
console.log(estudiantes [2]); // [] selecciona un elemento dentro de tu arrays
console.log(estudiantes.length); // length para indicar la cantidad de elementos que conforman tu arrays
console.log(estudiantes.reverse()); // invierte el orden de los valores
console.log(estudiantes.sort()); // ordena los valores en orden alfabetico
console.log(estudiantes.push("Antonio")); // push agrega valores al final de la lista
console.log(estudiantes.shift()); // shift elimina valores de nuestro arrays, si no se especifica un valor shift elimina el primer valor de nuestro arrays
console.log(estudiantes.pop()); // pop sirve para eliminar el ultimo elemento de nuestro arrays
console.log(estudiantes.indexOf("Carla")); // indexOf te indica la posicion de un elemento en el arrays, si devuelve -1 es que dicho elemento no forma parte de nuestro arrays
console.log(estudiantes.unshift("Ana")); // unshift agrega valores al inicio del arrays

// Combinar arrays
var grupo_a = [1,2,3];
var grupo_b = [4,5,6];
console.log(grupo_a.concat(grupo_b));