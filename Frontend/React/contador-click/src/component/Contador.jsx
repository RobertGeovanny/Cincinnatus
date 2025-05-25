import React from 'react';
import '../hojas-de-estilo/Contador.css'

function Contador({ numClics }) {
  return (
    <articule className='contador'>
      {numClics}
    </articule>
  )
}

export default Contador;