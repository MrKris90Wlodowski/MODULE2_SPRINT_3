import style from "./InputSelect.module.css"

const InputSelect = ({multiple, size, options}) => {
    return (
        <select multiple={multiple} size={size} className={style.inputSelect}>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    )
}

export default InputSelect