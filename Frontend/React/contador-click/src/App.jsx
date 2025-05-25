import './App.css'
import freeCodeCampLogo from './image/freecodecamp.png'
import Boton from './component/Boton.jsx'
import Contador from './component/Contador.jsx'
import { useState } from 'react'

function App() {

  const [numClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <main className='App'>
      <header className='free-logo-contenedor'>
        <img 
          className='free-logo' 
          src={freeCodeCampLogo} 
          alt='Logo de freeCodeCamp' />
      </header>
      <section className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} 
        />

        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} 
        />
      </section>
    </main>
  )
}

export default App
