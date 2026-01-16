// import { useState } from 'react'
import { CardSell } from './CardSell'

function App() {

  const setEventPrice = (price) => `$ ${price}`
  
  const artists = [
    {
      name: "Dua Lipa",
      idImage : "https://media.vogue.mx/photos/5c07028beccb767eb579ef95/2:3/w_2560%2Cc_limit/dua_lipa__7600.jpg",
      category:"Music",
      price:2500,
      language: "English",
      isLiked: true
    },
    {
      name: "Shakira",
      idImage : "https://cdn-images.dzcdn.net/images/artist/69c569506a8ff6ab0edfecbd1adf94b0/1900x1900-000000-80-0-0.jpg",
      category:"Music",
      price:1500,
      language: "Spanish",
      isLiked: true
    },
    {
      name:"Selena Gomez",
      idImage : "https://m.media-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_FMjpg_UX1000_.jpg",
      category:"Music",
      price:2000,
      language: "English",
      isLiked: true
    },
    {
      name: "Ana de Armas",
      idImage : "https://hips.hearstapps.com/hmg-prod/images/ana-de-armas-6841b672bced5.jpg",
      category:"Movies",
      price:20,
      language: "English",
      isLiked: false
    }
  ]

  return (
    <section className="main-cards">
      {
        artists.map( (art) => {
          return (
            <CardSell
              key={art.idImage}
              idImage={art.idImage}
              category={art.music}
              price={art.price}
              formatPrice={setEventPrice}
              language={art.language}
              isLiked={art.isLiked}
            >
              {art.name}
            </CardSell>
          )
        })
      }
    </section>
  )
}

export default App


      // <CardSell
      //   idImage="https://media.vogue.mx/photos/5c07028beccb767eb579ef95/2:3/w_2560%2Cc_limit/dua_lipa__7600.jpg"
      //   category="Music"
      //   price={2500}
      //   formatPrice={setEventPrice}
      //   language="English"
      //   isLiked
      // >
      //     Dua Lipa
      // </CardSell>

      // <CardSell
      //   idImage="https://cdn-images.dzcdn.net/images/artist/69c569506a8ff6ab0edfecbd1adf94b0/1900x1900-000000-80-0-0.jpg"
      //   category="Music"
      //   price={1500}
      //   formatPrice={setEventPrice}
      //   language="Spanish"
      //   isLiked={false}
      // >
      //   Shakira
      // </CardSell>

      // <CardSell
      //   idImage="https://m.media-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_FMjpg_UX1000_.jpg"
      //   category="Music"
      //   price={2000}
      //   formatPrice={setEventPrice}
      //   language="English"
      //   isLiked
      // >
      //   Selena Gomez
      // </CardSell>

      // <CardSell
      //   idImage="https://hips.hearstapps.com/hmg-prod/images/ana-de-armas-6841b672bced5.jpg"
      //   category="Movies"
      //   price={20}
      //   formatPrice={setEventPrice}
      //   language="English"
      //   isLiked={false}
      // >
      //   Ana de Armas
      // </CardSell>