const estatusPedido = () => {
  const estatus = Math.random() < 0.8;
  console.log(estatus);
  return estatus;
};

const miPedidoDePizza = new Promise((resolve, rejects) => {
  setTimeout(() => {
    if (estatusPedido) {
      resolve('Pedido exitoso! Su pizza esta en camino.');
    } else {
      rejects('Ocurrio un error. Por favor intente nuevamente');
    }
  }, 3000);
});

/* const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
}; 

miPedidoDePizza.then(manejarPedido, rechazarPedido);
*/

// Forma mas compacta
miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  .catch((mensajeDeError) => {
    console.log(mensajeDeError);
  });

