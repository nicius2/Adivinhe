import styles from "./app.module.css"
import { WORDS,Challenge } from "./util/words"

// Components
import Header from "./components/Header"
import Tip from "./components/Tip"
import Letter from "./components/Letter"
import Input from "./components/Input"
import Button from "./components/Button"
import {LetterUsed, lettersUsedProps} from "./components/LetterUsed"
import { useEffect, useState } from "react"

export default function App() {
  const [attempts, setAttempts] = useState(0) // numero de contagem
  const [letter, setLetter] = useState("") // letra do palpite
  const [letterUsed, setLetterUsed] = useState<lettersUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  function handlerRestart() {
    alert("Recarregando a pagina")
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]
    setChallenge(randomWord)
  }

  useEffect(() => {
    startGame()
  },[])

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handlerRestart} />

        <Tip tip="Biblioteca para criar interfaces Web com Javascript." />

        <div className={styles.letter}>
          {
            challenge?.word.split("").map(() =>(
              <Letter value=""/>
            ))
          }
        </div>

        <h5>Palpite</h5>

        <div className={styles.input}>
          <Input />
          <Button title="Confirmar" />
        </div>

        <LetterUsed data={letterUsed}/>
      </main>
    </div>
  )
}