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

  // Condicional para activar y desactivar clases
  const className = `square ${isSelected ? "is-selected" : ""}`

  const handleClick = () =>{
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App(){
  // Estados de juego
  const [board, setBoard] =  useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] && // Verifica que el 1er elemento no se encuentre vacio
        boardToCheck[a] === boardToCheck[b] && // Verifica 1er elemento = al 2do
        boardToCheck[a] === boardToCheck[c] // Verifica 1er elemento = al 3ro
      ){
        return boardToCheck[a] // x u o
      }
    }

    return null
  }

  const updateBoard = (index) => {

    // No actulizar si existe un elemento en Square
    if(board[index]) return

    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Actualizar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Verificar si existe un ganador 
    const newWinner = checkWinner(board)
    
  }
  
  // useState permite gestionar el estado de una variable para poder modificar un componente, su uso esta en el re-renderizado cuando se detecta de un cambio.

  // Array(9).fill(null)
  

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
       {
         board.map( (_, index) => {
          return (
            <Square 
              key={index}
              index={index}
              // updateBoard es una función
              updateBoard={updateBoard}
            >
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
    </main>
  )
}

export default App