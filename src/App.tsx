import styles from "./app.module.css"
import { WORDS, Challenge } from "./util/words"

// Components
import Header from "./components/Header"
import Tip from "./components/Tip"
import Letter from "./components/Letter"
import Input from "./components/Input"
import Button from "./components/Button"
import { LetterUsed, lettersUsedProps } from "./components/LetterUsed"
import { useEffect, useState } from "react"

const ATTEMPTS_MARGIN = 3


export default function App() {
  const [score, setScore] = useState(0) // quantidade de acertos
  const [letter, setLetter] = useState("") // letra do palpite
  const [letterUsed, setLetterUsed] = useState<lettersUsedProps[]>([
  ])
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  function handlerRestart() {
    const isConfirm = window.confirm("Você tem certeza que deseja reiniciar?")

    if(isConfirm) {
      startGame()
    }
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]
    setChallenge(randomWord)

    setScore(0)
    setLetter("")
    setLetterUsed([])
  }

  function handleConfirm() {
    setLetter("")
    if (!challenge) {
      return
    }

    if (!letter.trim()) {
      return alert("Digite uma letra")
    }

    const value = letter.toUpperCase()
    const exists = letterUsed.find((used) => used.value.toUpperCase() === value)

    if (exists) {
      setLetter("")
      return alert("Você já digitou a letra " + value)
    }

    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length

    const correct = hits > 0 // verificação booleana
    const currentScore = score + hits



    setLetterUsed((prevState) => [...prevState, { value, correct }])
    setScore(currentScore)
  }

  function endGame(message: string) {
    alert(message)
    startGame()
  }

  useEffect(() => {
    startGame()
  }, [])

  useEffect(() => {
    if (!challenge) {
      return
    }

    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame("Parabens você descobriu a palavra")
      }

      const attemptLimit = challenge.word.length + ATTEMPTS_MARGIN
      if(letterUsed.length === challenge.word.length) {
        return endGame("Que pena, você usou todas as tentativas!")
      }
    }, 200)
  }, [score, letterUsed.length])

  return (
    <div className={styles.container}>
      <main>
        <Header current={letterUsed.length}
          max={(challenge?.word.length ?? 0) + ATTEMPTS_MARGIN}
          onRestart={handlerRestart} />

        <Tip tip={challenge?.tip} />


        {/* correct letters */}
        <div className={styles.letter}>

          {
          challenge?.word.split("").map((letter, index) => {

            const lettersed = letterUsed
              .find((used) => used.value.toUpperCase() === letter.toUpperCase())

            return (
              <Letter key={index} value={lettersed?.value} color={lettersed?.correct ?
                "correct" : "default"
              } />
            )
          })
          }
        </div>

        <h5>Palpite</h5>

        <div className={styles.input}>
          <Input
            onChange={(e) => setLetter(e.target.value)}
            value={letter} 
            onKeyDown={(e) => e.key === "Enter" && handleConfirm()}
            />
          <Button
            title="Confirmar"
            onClick={handleConfirm} />
        </div>

        <LetterUsed data={letterUsed} />
      </main>
    </div>
  )
}