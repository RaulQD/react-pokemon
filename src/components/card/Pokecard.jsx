import './pokecard.css'

export const Pokecard = ({ pokemon,setPokemon, eliminarPokemon}) => {

  const { nombre, tipo, habilidades, region, evolucion,idPokemon } = pokemon;

  const handleDelete = () => {
      const response = confirm('¿Estas seguro de eliminar este pokemon?')
      if(response){
        eliminarPokemon(idPokemon);
      }
  }

  return (
    <div className="card">
      <div className="card__content">
        {/* <div className='card__back--img'>
                <img src={logo} alt="default.png" className='card__front-img' />
                <img src={logo} alt="default.png" className='card__front-img' />
              </div> */}
        <div className='card__back--data'>
          <p>Nombre: <span>{nombre}</span></p>
          <p> Tipo: <span>{tipo}</span> </p>
          <p> Habilidades: <span>{habilidades}</span></p>
          <p> Region: <span>{region}</span> </p>
          <div className='card__back--evo'>
            <div className='card__back--title'>
              <p>
                Evoluciones: <span>{evolucion}</span>
              </p>
            </div>
          </div>
          <div className='btn'>
            <button type="button" className='btn-editar btn-global' onClick={ () => setPokemon(pokemon)}>Editar</button>
            <button type='button' className='btn-eliminar btn-global' onClick={handleDelete}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>

  )
}

