import {useState} from 'react';

function CardIlustrations({titulo, subtitulo, imgIlustracion, imgDescripcion, descripcion, nombreArtista, videoJuego}) {

  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
  const [leDioLike, setLeDioLike] = useState(false);
  const [likes, setLikes] = useState(0);


  const descripcionCorta = descripcion.slice(0, 100) + '...';

  const manejarLike = () => {
    setLeDioLike(!leDioLike);
    setLikes(prev => (leDioLike ? prev - 1 : prev + 1));
  };

  return (
    <article className='bg-white my-4 rounded-md py-1 transition-shadow duration-300 hover:shadow-md w-[500px] mx-auto'>
      <h2 className='m-4 text-xl font-semibold' >{titulo}</h2>
      <p className='m-4 text-gray-700'>{subtitulo}</p>
      <img className='w-full object-cover rounded-sm' src={imgIlustracion} alt={`Ilustracion del juego: '${imgDescripcion}'`} />
      <div className='flex items-center gap-2 px-4 mt-4'>
        <button
          onClick={manejarLike}
          className={`text-xl transition-transform duration-200 ${leDioLike ? 'text-red-500 scale-110' : 'text-gray-400 hover:text-red-400'}`}
        >
          {leDioLike ? '❤️' : '🤍'}
        </button>
        <span className='text-sm text-gray-600'>{likes} Me gusta</span>
      </div>
      <p className='m-4'>
        {mostrarDescripcion ? descripcion : descripcionCorta}
        <button
          onClick={() => setMostrarDescripcion(prev => !prev)}
          className='ml-2 text-blue-500 hover:underline text-sm cursor-pointer' 
        >
          {mostrarDescripcion ? 'Mostrar menos' : 'Mostrar mas'}
        </button>
      </p>
      <div className='flex w-full rounded-sm items-center justify-between px-4 pb-2'>
        <a className='text-sm'>{nombreArtista}</a>
        <span className='text-sm italic'>{videoJuego}</span>
      </div>
    </article>
  )
}

export default CardIlustrations;