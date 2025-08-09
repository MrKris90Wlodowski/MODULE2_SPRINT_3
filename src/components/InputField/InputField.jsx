import style from "./InputField.module.css";

const InputField = ({ name, placeholder, type, children, register, onClick, className}) => {
  return (
    <div className={`${className || ""}`}>
    <label htmlFor={name} className={style.labelText}>
      {children}
    </label>
    <input
        className={style.inputText}
        id={name}
        placeholder={placeholder}
        type={type}
        {...(register ? register(name) : {})}
        onClick={onClick}
    />
    </div>
  );
};

export default InputField;
