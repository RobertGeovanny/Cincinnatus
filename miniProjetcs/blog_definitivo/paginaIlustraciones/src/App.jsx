import './App.css'
import CardIlustrations from './components/CardIlustrations'
import sekiro from './assets/sekiro.jpeg'
import darkSouls from '../src/assets/dark-souls.jpg'
import deathStranding from '../src/assets/dead-stranding.jpg'

function App() {

  return (
    <>
      <header className='bg-neutral-900 text-white flex flex-col justify-center gap-2 p-12'>
        <h1 className='text-center text-6xl font-bold'>Bienvenido a mi blog de Ilustraciones.</h1>
        <p className='text-2xl mt-4'>En este blog de ilustraciones encontraras las que para mi son las mejores ilustraciones de videojuegos reconocidos ampliamente por la comunidad Gamer.</p>
      </header>
      <main className='bg-[#efefef] p-4'>
        <section className='w-full pr-[17px] mx-auto flex items-baseline gap-5 py-10'>
          <CardIlustrations 
            titulo='Sekiro, shadows dies twices'
            subtitulo='Empezamos fuerte con Sekiro, shadows dies twices.'
            imgIlustracion={sekiro}
            imgDescripcion='Sekiro, shadows dies twices'
            descripcion='[Artista] nos regala esta hermosa ilustracion proveniente del aclamado estudio de "From Software", Sekiro, shadows dies twices.'
            nombreArtista='Artista: [Artista]'
            videoJuego='Videojuego: Sekiro, shadows dies twices'
          />
          <CardIlustrations 
            titulo='Dead Stranding'
            subtitulo='Ahora vamos con el siguiente que no es otro mas que Dead Stranding'
            imgIlustracion={deathStranding}
            imgDescripcion='Dead Stranding'
            descripcion='Aqui tenemos esta increible ilustracion por parte de [Artista] del juego Hideo Kojima, no se a ustedes pero en mi opinion esta imagen captura a la perfeccion ese sentimiento de tranquilidad y vastedad en sus espacios.'
            nombreArtista='Artista: [Artista]'
            videoJuego='Videojuego: Dark Souls'
          />
          <CardIlustrations 
            titulo='Dark Souls'
            subtitulo='Como se daran cuenta me gustan los juegos de From Software, Dark Souls'
            imgIlustracion={darkSouls}
            imgDescripcion='Dark Souls'
            descripcion='Volvemos al estudio de From Software, pero esta vez para mostrar la ilustracion de parte de [Artista] de la joya de la corona. Dark Souls'
            nombreArtista='Artista: [Artista]'
            videoJuego='Dark Souls'
          />
        </section>
      </main>
      <footer className='bg-[#222] p-20 text-white flex justify-between items-center'>
        <section className='float-right transition-colors duration-300 hover:text-[cornflowerblue]'>
          <a href='mailto:robertvasquez2050@gmail.com'>Contactame Aqui</a>
        </section>
          <p className='m-0'>Copyright 2024</p>
      </footer>
    </>
  )
}

export default App
