import s from "./Button.module.css"
export default function Button({onLearMore}) {
    return(
        <button className={s.Button} type="button" onClick={onLearMore}>Lear more</button>
    )
}