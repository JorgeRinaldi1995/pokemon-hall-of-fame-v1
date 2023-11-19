import './InputField.css'

const InputField = ({label, inputValue, placeholder, onAlter, inputType}) => {

    const onType = (event) => {
        onAlter(event.target.value)
    }

    return(
        <div className='form-item'>
            <label>{label}</label>
            <input required value={inputValue} onChange={onType} placeholder={placeholder} type={inputType}></input>
        </div>
    )
}

export default InputField