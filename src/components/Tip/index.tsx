import tipIcon from "../../assets/tip.svg"
import styles from "./styles.module.css"


type Props = {
    tip: string
}

export default function Tip({ tip }: Props) {
    return (
        <div className={styles.tip}>
            <img src={tipIcon} alt="Icone de dica" />

            <div>
                <h4>Dica</h4>
                <p>{tip}</p>
            </div>
        </div>
    )
}