import './Dropdown.css'

const Dropdown = ({onAlter, value, itens, label }) => {
    return(
        <div className='dropdown'>
            <label>{label}</label>
            <select onChange={event => onAlter(event.target.value)} value={value}>
                <option value=""></option>
                {itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown