import './Button.css'

const Button = ({children}) => {
    return (
        <button className='cta' type="submit">
            {children}
        </button>
    )
}

export default Button