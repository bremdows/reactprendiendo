import { useState } from 'react'

import './App.css'

console.log("Iniciando con el tablero del juego");

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({children, updateBoard, index, isSelected}) => {

  function handleClick(){
    updateBoard()
  }

  // Definir una clase (para modificar el juego) en función al estado de turno (turn)
  const selectedSquare = `square ${isSelected ? "is-selected" : ""}`

  return (
    <div onClick={handleClick} className={selectedSquare}>
      {children}
    </div>
  )
}

const updateBoard = () => {
  console.log("Turno jugado");
}

function App(){
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  console.log(board)

  return (
    <main className="board">
      <header className="instrucciones">
        <h1>Tres en raya</h1>
        <p>Es un juego popular que se gana al dibujar 3 simbolos seguidos en la rejilla</p>
      </header>
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
                {}
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

      {/* Agregar el turno del juego */}

    </main>
  )
}

export default App 