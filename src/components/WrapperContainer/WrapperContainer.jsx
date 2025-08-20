import style from "./WrapperContainer.module.css"

const WrapperContainer = ({key, className, children}) => {
    return (
        <div key={key} className={className}>{children}</div>
    )
}

export default WrapperContainer