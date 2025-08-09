import style from "./TextHeading.module.css";

const TextHeading = ({children, className}) => {
    return (
        <p className={`${style.headingsStyle} ${className || ""}`}>{children}</p>
    )
}

export default TextHeading