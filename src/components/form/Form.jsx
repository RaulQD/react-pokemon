import { useEffect, useState } from 'react'
import './form.css'
import { Error } from '../error/Error';

export const Form = ({ pokemons, setPokemons, pokemon, setPokemon }) => {

    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [habilidades, setHabilidades] = useState('')
    const [region, setRegion] = useState('')
    const [evolucion, setEvolucion] = useState('')

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(pokemon).length > 0) {
            const { nombre, tipo, habilidades, region, evolucion } = pokemon;
            setNombre(nombre)
            setTipo(tipo)
            setHabilidades(habilidades)
            setRegion(region)
            setEvolucion(evolucion)
        }
    }, [pokemon]);



    const generateId = () => {
        const random = Math.random().toString(20).substring(2)
        const fecha = Date.now().toString(20);
        return random + fecha;
    }

    const handleSubmit = ((e) => {
        e.preventDefault();

        if ([nombre, tipo, habilidades, region, evolucion].includes('')) {
            console.log('estan vacios')
            setError(true);
            return
        }
        setError(false);

        const objPokemon = {
            nombre,
            tipo,
            habilidades,
            region,
            evolucion
        }
        if (pokemon.idPokemon) {
            //EDITAR POKEMON
            objPokemon.idPokemon = pokemon.idPokemon
            const pokemonActualizar = pokemons.map((pokemonState) => pokemonState.idPokemon === pokemon.idPokemon ? objPokemon : pokemonState)
            setPokemons(pokemonActualizar);
           /* `setPokemon({});` is setting the `pokemon` state to an empty object. This is typically
           used to reset the form fields after editing a pokemon. */
            setPokemon({});
        } else {
            //REGISTRAR POKEMON
            objPokemon.idPokemon = generateId()
            setPokemons([...pokemons, objPokemon]);
        }

        setNombre('');
        setHabilidades('');
        setTipo('');
        setEvolucion('');
        setRegion('');
    })


    return (
        <div className="form">
            <div className='header-list'>
                <h2>Formulario de pokemons</h2>
                <p>Añade tús {' '}
                    <span>pokemons capturados </span></p>
            </div>
            <form className="form__content" onSubmit={handleSubmit}>
                {error && <Error>Todos los campos son obligatorios.</Error>}
                <div className='form__box'>
                    <div className="form__wrap">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" className="form__input" value={nombre}
                            onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="form__wrap">
                        <label htmlFor="tipo">Tipo</label>
                        <input type="text" className="form__input" value={tipo}
                            onChange={(e) => setTipo(e.target.value)} />
                    </div>
                    <div className="form__wrap">
                        <label htmlFor="abilities">Habilidades</label>
                        <input type="text" className="form__input" id="abilities" name="abilities" value={habilidades}
                            onChange={(e) => setHabilidades(e.target.value)} />
                    </div>
                    <div className="form__wrap">
                        <label htmlFor="region">Region</label>
                        <input type="text" className="form__input" name="region" id="region" value={region}
                            onChange={(e) => setRegion(e.target.value)} />
                    </div>
                    <div className="form__wrap">
                        <label htmlFor="evoluciones">Evoluciones</label>
                        <input type="text" name="evoluciones" id="evoluciones" className="form__input" value={evolucion} onChange={(e) => setEvolucion(e.target.value)} />
                    </div>
                    <div className='form__wrap'>
                        <input type="submit" value={pokemon.idPokemon ? 'Editar pokemon' : 'Registrar pokemon'} className='button' />
                    </div>
                </div>
            </form>
        </div>
    )
}

