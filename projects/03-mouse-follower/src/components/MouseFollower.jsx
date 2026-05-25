import { useState, useEffect } from "react"

export default function MouseFollower() {

    const [enable, setEnable] = useState(false)
    const [position, setPosition] = useState({x: 0, y:0})
    // Configurando el efecto para que se ejecute cada vez que se ejecute un efecto
    useEffect(() => {
    console.log('effect', {enable});
    
    const handleMove = (event) => {
      const {clientX, clientY} = event
      // console.log('handleMove', {clientX, clientY})
      setPosition({x : clientX, y: clientY})
    }

    if (enable){
      window.addEventListener('pointermove', handleMove)
    }

    // Limpiar suscripciones 
    return () => {
      console.log('cleanup');
      window.removeEventListener('pointermove', handleMove)
      setPosition({x:0, y:0})
    }

  }, [enable])
  
  return(
    <>
        <div style={{
            position: 'absolute',
            backgroundColor:'#09f',
            border:'3px solid #003',
            borderRadius:'50%',
            opacity: 0.8,
            pointerEvents:'none',
            left:-20,
            top: -20,
            width: 40,
            height:40,
            transform: `translate(${position.x}px, ${position.y}px)`
        }}>
        </div>
        <button onClick={() => {setEnable(!enable)}}>
            {enable ? 'Desactivar' : 'Activar'} seguir puntero
        </button>
    </>
  )
}