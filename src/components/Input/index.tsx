import styles from "./styles.module.css"

type Props = React.ComponentProps<"input">

export default function Input({...rest}: Props) {
    return <input 
    type="text" 
    maxLength={1} 
    placeholder="?" 
    className={styles.input}></input>
}