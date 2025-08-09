import style from "./Button.module.css";

const Button = ({type, children, className, onClick}) => {
    return (
        <button className={`${style.buttonWrapper} ${className || ""}`} type={type} onClick={onClick}>{children}</button>
    )
}

export default Button;