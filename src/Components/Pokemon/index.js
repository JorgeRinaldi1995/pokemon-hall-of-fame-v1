import './Pokemon.css'

const Pokemon = ({ name, image, type, secondaryType }) => {
    return(
        <div className='pokemon-card'>
            <div className='pokemon-card__header'>
                <img src={image} alt={name} />
            </div>
            <div className='pokemon-card__body'>
                <h4>{name}</h4>
                <p>{type} {secondaryType ? `/ ${secondaryType}` : ''}</p>
            </div>
        </div>
    )
}

export default Pokemon