import styles from "./styles.module.css"
import Letter from "../Letter"


export default function LetterUsed() {
    return (
        <div className={styles.letterUsed}>
            <h5>Letras ultilizadas</h5>

            <div className={styles.letter}>
                <Letter value="R" size="small" color="correct"/>
                <Letter value="E" size="small" color="wrong"/>
                <Letter value="A" size="small" color="correct"/>
            </div>
        </div>
    )
}