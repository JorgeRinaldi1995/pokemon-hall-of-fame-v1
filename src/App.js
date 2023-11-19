import { useState, useEffect } from "react"
import Form from "./Components/Form"
import Team from './Components/Team'
import Modal from './Components/Modal/index'

function App() {

  const generations = [
    {
      generation: 'I',
      gameNames: 'FR/LG'
    },
    {
      generation: 'II',
      gameNames: 'HG/SS'
    },
    {
      generation: 'III',
      gameNames: 'AR/OS'
    },
    {
      generation: 'IV',
      gameNames: 'BD/SP'
    },
    {
      generation: 'V',
      gameNames: 'B/W'
    },
    {
      generation: 'VI',
      gameNames: 'X/Y'
    },
    {
      generation: 'VII',
      gameNames: 'S/M'
    },
    {
      generation: 'VIII',
      gameNames: 'SW/SH'
    },
    {
      generation: 'IX',
      gameNames: 'S/V'
    }
  ]

  const types = [
    {
      type: 'Normal'
    },
    {
      type: 'Grass'
    },
    {
      type: 'Fire'
    },
    {
      type: 'Water'
    },
    {
      type: 'Electric'
    },
    {
      type: 'Flying'
    },
    {
      type: 'Rock'
    },
    {
      type: 'Ground'
    },
    {
      type: 'Bug'
    },
    {
      type: 'Fighting'
    },
    {
      type: 'Psychic'
    },
    {
      type: 'Ghost'
    },
    {
      type: 'Dark'
    },
    {
      type: 'Poison'
    },
    {
      type: 'Fairy'
    },
    {
      type: 'Steel'
    },
    {
      type: 'Ice'
    },
    {
      type: 'Dragon'
    }
  ]

  const secondaryTypes = [
    {
      type: 'Normal'
    },
    {
      type: 'Grass'
    },
    {
      type: 'Fire'
    },
    {
      type: 'Water'
    },
    {
      type: 'Electric'
    },
    {
      type: 'Flying'
    },
    {
      type: 'Rock'
    },
    {
      type: 'Ground'
    },
    {
      type: 'Bug'
    },
    {
      type: 'Fighting'
    },
    {
      type: 'Psychic'
    },
    {
      type: 'Ghost'
    },
    {
      type: 'Dark'
    },
    {
      type: 'Poison'
    },
    {
      type: 'Fairy'
    },
    {
      type: 'Steel'
    },
    {
      type: 'Ice'
    },
    {
      type: 'Dragon'
    }
  ]

  const [showModal, setShowModal] = useState(false);

  const LOCAL_STORAGE_KEY = 'pokemons'

  const [pokemons, setPokemons] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [])

  const pokemonAdded = (pokemon) => {

/*     const pokemonGeneration = pokemons.map(pokemon => pokemon.generation)
 */

    const pokemonsByGeneration = pokemons.filter(pokemon => pokemon.generation === generations.generation);


    const limitPokemonPerGeneration = pokemonsByGeneration.slice(0, 6);

    (limitPokemonPerGeneration.length < 6) ? setPokemons([...pokemons, pokemon]) : setShowModal(true)
    
  }

  useEffect(() => {

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pokemons))

    
  }, [pokemons])

  return (
    <div className="App">
      {showModal && (
        <Modal
          openModal={true}
          modalTitle="OOPS"
          modalText="You can't have more than 6 Pokemons in your team"
      /> 
      )}
      <Form 
        generations={generations.map(generation => generation.generation)} 
        types={types.map(type => type.type)}
        secondaryTypes={secondaryTypes.map(secondaryType => secondaryType.type)}
        newPokemonAdded={(pokemon, selectedGeneration) => pokemonAdded(pokemon, selectedGeneration)}/>
        {generations.map(generation => <Team 
          key={generation.generation}
          generation={generation.generation}
          gameNames={generation.gameNames}
          pokemons={pokemons.filter(pokemon => pokemon.generation === generation.generation)}
        />)}
    </div>
  )
}

export default App
