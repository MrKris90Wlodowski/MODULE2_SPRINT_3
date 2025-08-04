import style from "./ButtonContainer.module.css";

const ButtonContainer = ({type, children}) => {
    return (
        <button className={style.buttonWrapper} type={type}>{children}</button>
    )
}

export default ButtonContainer;