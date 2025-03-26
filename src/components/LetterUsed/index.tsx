import styles from "./styles.module.css"
import Letter from "../Letter"

export type lettersUsedProps = {
    value: string
    correct: boolean
}

type Props = {
    data: lettersUsedProps[]
}


export function LetterUsed({ data }: Props) {
    return (
        <div className={styles.letterUsed}>
            <h5>Letras ultilizadas</h5>

            <div className={styles.letter}>
                {
                    data.map(({ value, correct }) => (
                        <Letter
                            value={value}
                            size="small"
                            color={correct ? "correct" : "wrong"} />
                    ))
                }

            </div>
        </div>
    )
}