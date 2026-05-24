import { useState } from 'react'

import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

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
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
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
    return false
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

    // Establecer el estado del ganador
    const newWinner = checkWinner(newBoard)

    // Si existe un ganador actualizar el estado
    if(newWinner){
      setWinner(newWinner)
      console.log(newWinner)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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
          board.map((_, index) => {
            return (
              <Square
                // el parámero key permite identificar de manera unica a un elemento evitando errores en la actualización del estado.
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {/* El contenido de un elemento se asigna automaticamente al parámetro children del componente*/}
                {board[index]}
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
                { winner === false ? "Empate" : "Ganó: "}
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