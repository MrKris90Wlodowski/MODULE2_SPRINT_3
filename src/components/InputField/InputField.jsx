import style from "./InputField.module.css";

const InputField = ({id, name, placeholder, type, children, register, onClick, value}) => {
  return (
    <label htmlFor={id} className={style.labelText}>
        {children}
        <input
        className={style.inputText}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        {...(register ? register(id) : {})}
        onClick={onClick}
    />
    </label>
  );
};

export default InputField;
