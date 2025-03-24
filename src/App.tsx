import Header from "./components/Header"
import styles from "./app.module.css"

function handleRestart() {
  alert("Reiniciar o jogo")
}

export default function App() {
  return (
    <div className={styles.container}>
      <main>
        <Header current={3} max={5} onRestart={handleRestart}/>
      </main>
    </div>
  )
}