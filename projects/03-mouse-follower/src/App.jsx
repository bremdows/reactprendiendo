import { useState } from "react"
import MouseFollower from "./components/MouseFollower"



function App (){
  const [component, setComponent] = useState(false)

  

  return (
    <main>

      {/* <MouseFollower position={position} /> */}

      {component && <MouseFollower />}
      <div>
        <button onClick={()=>{setComponent(!component)}}>
                {component ? 'Desactivar' : 'Activar'} componente
        </button>
      </div>
    </main>
  )
}

export default App