// funciones

/* function suma(a,b) {
    var sum = a + b;
    console.log('La suma es: '+ sum)
}
suma(8,4); */

// FUNCIONES RETORNABLES: estas funciones devuelve un valor

function dato_trabajador() {
    var salario = 2550;
    return salario;
}

var obrero = dato_trabajador();
console.log(obrero);



// FUNCIONES ANONIMAS(flecha): es una funcion que no tiene valor, que se usa dentro de otra funcion que si vera su valor

/* var resta = function (n1, n2) {
    return n1 - n2;
} */

// Estructura real de una funcion anonima
var resta = (n1,n2) => n1 - n2;
console.log(resta(8, 2));

/* var nombre = function(){
    return "juan";
}
console.log(nombre()); */

var nombre = () => "victor";
console.log(nombre());



// FUNCIONES ANIDADAS:

function operacion() {
    const PI = 3.14;
    function area(radio) {
        var area = PI * radio * radio;
        console.log(`El area del circulo es: ${area}`);
    }
    operacion.area = area;
}

var radio = 4;
operacion();
operacion.area(radio);