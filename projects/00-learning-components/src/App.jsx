// import { useState } from 'react'
import { CardSell } from './CardSell'

function App() {
  
  return (
    <section className="main-cards">
      <CardSell
        idImage="https://media.vogue.mx/photos/5c07028beccb767eb579ef95/2:3/w_2560%2Cc_limit/dua_lipa__7600.jpg"
        title="Gira Mundial 2026"
        category="Music"
        price={2500}
        isliked
      >
          Dua Lipa
      </CardSell>

      <CardSell
        idImage="https://cdn-images.dzcdn.net/images/artist/69c569506a8ff6ab0edfecbd1adf94b0/1900x1900-000000-80-0-0.jpg"
        title="Album Monotonico"
        category="Music"
        price={1500}
      >
        Shakira
      </CardSell>

      <CardSell
        idImage="https://m.media-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_FMjpg_UX1000_.jpg"
        title="My world in your eyes"
        category="Music"
        price={2000}
        isliked
      >
        Selena Gomez
      </CardSell>
    </section>
  )
}

export default App
