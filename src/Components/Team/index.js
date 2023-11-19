import './Team.css'
import Pokemon from '../Pokemon/index'


const Team = ({ generation, gameNames, pokemons }) => {

    const pokemonsListing = pokemons.slice(0, 6).map(pokemon => (
        <Pokemon key={pokemon.name} image={pokemon.image} name={pokemon.name} type={pokemon.type} secondaryType={pokemon.secondaryType} />
    ))

    


    return (
        (pokemons.length >= 1) && 
        <section className='pokemon-team'>
            <h3>Generation {generation}</h3>
            <h4>{gameNames}</h4>
            <div className='pokemons'>
                {pokemonsListing}
            </div>
        </section>
    );
}

export default Team;