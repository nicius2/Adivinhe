import styles from "./styles.module.css"

type Props = {
    value?: string
    size?: "default" | "small"
    color?: "default" | "correct" | "wrong"
}

export default function Letter({value = "", size = "default", color = "default"}: Props) {
    return (
        <div className={`
        ${styles.letter}
        ${size === "small" && styles.letterSmall}
        ${color === "correct" && styles.letterCorrect}
        ${color === "wrong" && styles.letterWrong}
        `}>
            <p>{value}</p>
        </div>
    )
}