import './pokelist.css'
import { Pokecard } from '../../components/card/Pokecard';

export const Pokelist = ({ pokemons, setPokemon, eliminarPokemon }) => {


  return (
    <section className="list__content">
      {
        pokemons && pokemons.length ? (
          <>
            <div className='header-list'>
              <h2>Lista de Pokemones</h2>
              <p>Información de tús {' '}
                <span>  pokemons registrados</span>
              </p>
            </div>
            <div className='listar__pokecards'>
              {pokemons.map((pokemon) => (
                <Pokecard
                  key={pokemon.idPokemon}
                  pokemon={pokemon}
                  setPokemon={setPokemon}
                  eliminarPokemon={eliminarPokemon}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className='header-list'>
              <h2>La lista esta vacia!!.</h2>
              <p>No hay ningun   {' '}
                <span>  registro pokemon</span>
              </p>
            </div>
            <div className='listar__pokecards'>
              {pokemons.map((pokemon) => (
                <Pokecard
                  key={pokemon.idPokemon}
                  pokemon={pokemon}
                />
              ))}
            </div>
          </>

        )}

    </section>



  )
}
