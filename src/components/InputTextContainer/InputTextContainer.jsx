const InputTextContainer = ({name, placeholder, type, children}) => {
    return (
        <label htmlFor={name}>{children}<input id={name} placeholder={placeholder} type={type}/></label>
    )
}

export default InputTextContainer