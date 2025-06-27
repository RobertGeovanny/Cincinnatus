const { rejects } = require("assert");
const { resolve } = require("path");

const promesaCumplida = false;

const miPromesa = new Promise((resolve, rejects) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve('Promesa cumplida');
    } else {
      rejects('Promesa rechazada...');
    }
  }, 3000)
});

const manejarPromesaCumplida = (valor) => {
  console.log(valor);
}

const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);