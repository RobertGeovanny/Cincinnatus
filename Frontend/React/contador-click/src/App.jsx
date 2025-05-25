import './App.css'
import freeCodeCampLogo from './image/freecodecamp.png'
import Boton from './component/Boton.jsx'
import Contador from './component/Contador.jsx'

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
        <Contador numClics='0' />
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
