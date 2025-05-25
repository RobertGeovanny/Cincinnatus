import './App.css'
import freeCodeCampLogo from './image/freecodecamp.png'

function App() {
  return (
    <main className='App'>
      <header className='free-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' 
        />
      </header>
    </main>
  ) 
}

export default App
