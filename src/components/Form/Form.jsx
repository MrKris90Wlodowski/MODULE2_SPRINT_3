import style from "./Form.module.css";

const FormContainer = ({onSubmit, children}) => {
    return (
        <form className={style.formContainer} onSubmit={onSubmit}>{children}</form>
    )
}

export default FormContainer