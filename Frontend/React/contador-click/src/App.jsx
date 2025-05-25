import './App.css'
import './hojas-de-estilo/Boton.css'
import freeCodeCampLogo from './image/freecodecamp.png'
import Boton from './component/Boton.jsx'

function App() {

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
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
