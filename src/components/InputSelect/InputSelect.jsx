import style from "./InputSelect.module.css"

const techIT = ["React","Node.js","HTML","CSS","Next.js"]

const InputSelect = () => {
    return (
        <select multiple size={techIT.length} className={style.inputSelect}>
            {techIT.map((tech, index) => (
                <option key={index} value={tech}>{tech}</option>
            ))}
        </select>
    )
}

export default InputSelect