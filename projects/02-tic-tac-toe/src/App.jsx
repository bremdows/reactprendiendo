import { useState } from 'react'

const TURNS = {
  X : 'x',
  O : 'o'
}


const Square = ({children, isSelected, updateBoard, indice}) => {

  const turnClassName = isSelected ? "square is-selected" : "square"

  function handleClick(){
    updateBoard(indice)
  }

  return (
    <div 
      onClick={handleClick}
      className={turnClassName}
    >
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
  const [board, setBoard] = useState(Array(9).fill(null))
  // Array(9).fill(null)
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const WINNER_COMBO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBO){
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
      
    } 
  }

  const updateBoard = (indice) => {
    // Evitar sobreescribir
    if (board[indice]) return
    
    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[indice] = turn
    setBoard(newBoard)
    
    // Actualizar el turno
    const newTurn = turn === TURNS.X ? TURNS.O :  TURNS.X
    setTurn(newTurn)

    // Verificar el ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner(!newWinner) // Estos son eventos asincronos por lo que las variables no se actualizan en el orden de ejecución
      // * POR LO TANTO AL MOSTRAR EL VALOR DE WINNER (QUE DEBIO ACTUALIZARSE) MUESTRA EL VALOR DE NULL (VALOR INICIAL) PORQUE LOS CAMBIOS NO SON INMEDIATOS 
      alert(`Gano: ${newWinner}`)
    }
  }

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
                updateBoard={updateBoard}
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
      <section className="turn">
        <Square
          isSelected={turn === TURNS.X}
        >
          {TURNS.X}
        </Square>

        <Square
          isSelected={turn === TURNS.O}
        >
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App