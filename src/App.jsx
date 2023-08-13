import { useEffect, useState } from 'react';
import { Form } from './components/form/Form';
import { Header } from './components/header/Header';
import { Pokelist } from './pages/listaPokemon/Pokelist';

export const App = () => {

  const POKEMON_STORAGE = JSON.parse(localStorage.getItem('pokemons')) ?? []
  const [pokemons, setPokemons] = useState(POKEMON_STORAGE)
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    localStorage.setItem('pokemons', JSON.stringify(pokemons));
  }, [pokemons])

  const eliminarPokemon = idPokemon => {
    const pokemonEliminado = pokemons.filter(pokemon => pokemon.idPokemon !== idPokemon)

    setPokemons(pokemonEliminado);
  }

  return (
    <>
      <Header>Registra todos tús pokemons capturados.</Header>
      <div className='content'>
        <Form
          pokemons={pokemons}
          setPokemons={setPokemons}
          pokemon={pokemon}
          setPokemon={setPokemon}
        />
        <Pokelist
          pokemons={pokemons}
          setPokemon={setPokemon}
          eliminarPokemon={eliminarPokemon} />
      </div>
    </>
  )
}

