import style from "./InputField.module.css";

const InputField = ({id, name, placeholder, type, children, register, onClick, value, accept, errors}) => {

  // const isRadioInput = type === "radio";

  return (
    <div>
    <label htmlFor={id} className={style.labelText}>
        {children}
        <input
        className={style.inputText}
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        accept={accept}
        // {...(isRadioInput && register ? register(name, { value }) : register ? register(name) : {})}
        {...( register ? register(name) : {})}
        onClick={onClick}
    />
    </label>
    {errors?.[id] && <p className={style.errorText}>{errors[id].message}</p>}
    </div>
  );
};

export default InputField;
