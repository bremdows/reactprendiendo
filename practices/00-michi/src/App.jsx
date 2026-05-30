import { useState } from 'react'
import confetti from 'canvas-confetti'

import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}
// TODO: AGREGAR LOCALSTORAGE PARA MANTENER EL ESTADO DEL JUEGO
const WINNER_COMBOS = [
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
]

const Square = ({children, updateBoard, index, isSelected}) => {

  function handleClick(){
    updateBoard(index)
  }

  // Definir una clase (para modificar el juego) en función al estado de turno (turn)
  const selectedSquare = `square ${isSelected ? "is-selected" : ""}`

  return (
    <div onClick={handleClick} className={selectedSquare}>
      {children}
    </div>
  )
}


function App(){
  const [board, setBoard] = useState( () => {
    if (window.localStorage.getItem("board")) {
      return JSON.parse(window.localStorage.getItem("board"))
    }
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState( () => {
    if(window.localStorage.getItem("turn")){
      return JSON.parse(window.localStorage.getItem("turn"))
    }
    return TURNS.X
  })


  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {

    for (const combo of WINNER_COMBOS){
      const [a, b, c] =  combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    // NO existe ganador (empate)
    return null
  }

  const updateBoard = (index) => {

    // Finalizar el juego cuando se tenga un ganador y evitar que los lugares ocupados (con marca) se actualizen

    // Lo que hace es preguntar por el elemento en el indice especifico y si existe algo, simplemente retorna (finaliza la función) sin aplicar un cambio
    
    // La misma lógica se aplica para el ganador, si existe un ganador ya no se pueden realizar más jugadas

    if (board[index] || winner) return

    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Establecer nuevo turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Registrado el estado del tablero y turno en el localStorage
    window.localStorage.setItem("board", JSON.stringify(newBoard))
    window.localStorage.setItem("turn", JSON.stringify(newTurn))

    // Establecer el estado del ganador
    const newWinner = checkWinner(newBoard)
    const isGameComplete = newBoard.every((square) => {
      return square != null
    })

    // Si existe un ganador actualizar el estado
    if(newWinner){
      setWinner(newWinner)
      confetti()
      // console.log(newWinner)
    }else if (isGameComplete){
      // Establecer condición para el empate
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    // Borrar los valores almacenados en el localStorage
    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
    
  }

  return (
    <main className="board">
      <header className="instrucciones">
        <h1>Tres en raya</h1>
        <p className="board__description">Representaciòn digital del conocido juego: Michi</p>
      </header>
      <section className="reset">
        <button onClick={resetGame}>Reiniciar Partida</button>
      </section>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                // el parámero key permite identificar de manera unica a un elemento evitando errores en la actualización del estado.
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {/* El contenido de un elemento se asigna automaticamente al parámetro children del componente*/}
                {square}
              </Square>
            ) 
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {/* Agregar un renderizado condicional */}
      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                { winner === false ? "Empate" : "Ganó"}
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}> Reiniciar Juego </button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App 