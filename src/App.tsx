import styles from "./app.module.css"
import Header from "./components/Header"
import Tip from "./components/Tip"
import Letter from "./components/Letter"
import Input from "./components/Input"
import Button from "./components/Button"
import LetterUsed from "./components/LetterUsed"

function handlerRestart() {
  alert("Recarregando a pagina")
}

export default function App() {
  return(
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handlerRestart}/>

        <Tip tip="Biblioteca para criar interfaces Web com Javascript."/>
        
        <div className={styles.letter}>
          <Letter value="C"/>
          <Letter value="S"/>
          <Letter value="S"/>
        </div>

          <h5>Palpite</h5>

        <div className={styles.input}>
        <Input />
        <Button title="Confirmar"/>
        </div>

       <LetterUsed />
      </main>
    </div>
  )
}