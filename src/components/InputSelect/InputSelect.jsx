import styleSelect from "./InputSelect.module.css";
import styleError from "../InputField/InputField.module.css";

const InputSelect = ({ multiple, size, options, name, register, errors }) => {
  return (
    <div>
      <select multiple={multiple} size={size} className={styleSelect.inputSelect} name={name} {...(register ? register(name) : {})}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors?.[name] && <p className={styleError.errorText}>{errors[name].message}</p>}
    </div>
  );
};

export default InputSelect;
