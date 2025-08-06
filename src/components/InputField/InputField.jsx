import style from "./InputField.module.css"

const InputTextContainer = ({name, placeholder, type, children}) => {
    return (
        <label htmlFor={name}>{children}<input className={style.inputText} id={name} placeholder={placeholder} type={type}/></label>
    )
}

export default InputTextContainer