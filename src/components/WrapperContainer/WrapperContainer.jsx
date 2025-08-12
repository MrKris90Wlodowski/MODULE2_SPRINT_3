import style from "./WrapperContainer.module.css"

const WrapperContainer = ({className, children}) => {
    return (
        <div className={className}>{children}</div>
    )
}

export default WrapperContainer