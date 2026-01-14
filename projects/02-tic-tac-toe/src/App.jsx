import { useState } from 'react'

const TURNS = {
  X : 'x',
  O : 'o'
}
// Definir un arreglo de 9 elementos y completarlos con null
const board = Array(9).fill(null)

// Así se pueden ir importando imágenes
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

function App() {

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <div className="cell" key={index}>
                <span className="cell__content">
                  {index}
                </span>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default App