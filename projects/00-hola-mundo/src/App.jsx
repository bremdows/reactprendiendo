import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (userName) => `@${userName}`

    const [name, setName] = useState("MoureDev")
    
    const [isFollowing, setIsFollowing] = useState(false)

    console.log("[App] Actualizado desde: " + isFollowing)

    return (
        <section className='app'>
            <TwitterFollowCard 
             userName={name}
             formatUserName={formatUserName}
             name="Davis Bremdow Salazar Roa"
             initialIsFollowing={isFollowing}
             />

            <TwitterFollowCard 
             formatUserName={formatUserName}
             userName="x"
             name="X Twitter"
             initialIsFollowing={isFollowing}
             />

             <TwitterFollowCard
                userName="claroperu"
                name="Claro E.I.R.L"
                formatUserName={formatUserName}
                initialIsFollowing={isFollowing}
                >
             </TwitterFollowCard>

             <button onClick={ () => { setName("freddier") }}> Cambiar estado </button>
             <button onClick={() => {setIsFollowing(!isFollowing) }}> Cambiar estado 2</button>
        </section>
    )
}