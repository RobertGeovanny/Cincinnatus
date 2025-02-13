function area() {
    const PI = 3.14;
    var radio = document.getElementById("radio").value;
    var resultado = PI * radio * radio;
    document.getElementById("resultado").value = resultado;
}

// FUNCIONES QUE MUY PROBABLEMENTE USARAS
// eval()
var a = 10;
var b = 20;
var x = eval('a + b');
var y = eval('3 + 4');
var z = eval("a + 8");
var respt = a + y;
//console.log(respt);

//pasefloat: convierte un numero en una cadena en un numero flotante

var a = parseFloat('10');
var b = parseFloat('20curso');

// console.log(b);

// Date.parse()
// javasript toma como fecha de inicio 1 enero de 1970
var dato = 'april 26, 2020 1:30 PM';
var resultado = Date.parse(dato);
console.log(resultado);