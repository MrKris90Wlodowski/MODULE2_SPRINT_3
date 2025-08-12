import style from "./InputField.module.css";

const InputField = ({id, name, placeholder, type, children, register, onClick, value, errors}) => {
  return (
    <div>
    <label htmlFor={id} className={style.labelText}>
        {children}
        <input
        className={style.inputText}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        {...(register ? register(name) : {})}
        onClick={onClick}
    />
    </label>
    {errors?.[id] && <p className={style.errorText}>{errors[id].message}</p>}
    </div>
  );
};

export default InputField;
