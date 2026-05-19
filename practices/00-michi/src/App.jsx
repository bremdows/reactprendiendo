import { useState } from 'react'

import './App.css'

console.log("Iniciando con el tablero del juego");

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({children, updateBoard, index}) => {
  return (
    <div className="square">
      {children}
    </div>
  )
}

function App(){
  const [board, setBoard] = useState(Array(9).fill(null))
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
              >
                {/* El contenido de un elemento se asigna automaticamente al parámetro children del componente*/}
                {index}
              </Square>
            )
          })
        }
      </section>

    </main>
  )
}

export default App
