import style from "./TextHeading.module.css";

const TextHeading = ({children}) => {
    return (
        <p className={style.headings}>{children}</p>
    )
}

export default TextHeading