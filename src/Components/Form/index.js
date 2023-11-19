import Button from '../Button'
import Dropdown from '../Dropdown'
import InputField from '../InputField/index'
import './Form.css'
import { useState } from 'react'

const Form = ({newPokemonAdded, generations, types, secondaryTypes}) => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [generation, setGeneration] = useState('')
    const [type, setType] = useState('')
    const [secondaryType, setSecondaryType] = useState('')

    const addPokemon = (e) => {
        e.preventDefault()

        newPokemonAdded({
            name,
            image,
            generation,
            type,
            secondaryType
        })

    }

    

    return(
        <div className='poke-form'>
            <form onSubmit={addPokemon}>
                <InputField label="Pokemon Name" placeholder="Type the pokemon name..." inputValue={name} onAlter={inputValue => setName(inputValue)}/>
                <InputField label="Pokemon Image" placeholder="Insert pokemon image url..." inputValue={image} onAlter={inputValue => setImage(inputValue)}/>
                <Dropdown label="Pokemon Type" itens={types} inputValue={type} onAlter={inputValue => setType(inputValue)}/>
                <Dropdown label="Pokemon Secondary Type" itens={secondaryTypes} inputValue={secondaryType} onAlter={inputValue => setSecondaryType(inputValue)}/>
                <Dropdown label="Pokemon Generation" itens={generations} inputValue={generation} onAlter={inputValue => setGeneration(inputValue)}/>
                <Button>Send</Button>
            </form>
        </div>
    )
}

export default Form