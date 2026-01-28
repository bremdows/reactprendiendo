import { useState } from 'react'

const TURNS = {
  X : 'x',
  O : 'o'
}


const Square = ({children, updateBoard, indice}) => {
  return (
    <div className="square">
      {children}
    </div>
  )
}

// Así se pueden ir importando imágenes
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

function App() {
  
  // Definir un arreglo de 9 elementos y completarlos con null y establecerlo como el estado inicial
  const [board, setBoard] = useState( Array(9).fill(null) )
   


  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                indice={index}
              >
                {board[index]}
              </Square>
              // <div className="cell" key={index}>
              //   <span className="cell__content">
              //     {index}
              //   </span>
              // </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default App