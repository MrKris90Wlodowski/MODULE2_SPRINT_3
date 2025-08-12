import style from "./InputSelect.module.css"

const InputSelect = ({multiple, size, options}) => {
    return (
        <select multiple={multiple} size={size} className={style.inputSelect}>
            {options.map((option, index) => (
                <options key={index} value={option}>{option}</options>
            ))}
        </select>
    )
}

export default InputSelect