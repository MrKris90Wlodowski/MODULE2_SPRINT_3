import style from "./WrapperContainer.module.css"

const WrapperContainer = ({children}) => {
    return (
        <div className={style.wrapper}>{children}</div>
    )
}

export default WrapperContainer