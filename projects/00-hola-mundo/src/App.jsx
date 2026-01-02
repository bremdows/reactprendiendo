import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (userName) => `@${userName}`

    const [name, setName] = useState("bremdows_dev")

    return (
        <section className='app'>

            <TwitterFollowCard 
                formatUserName={formatUserName}
                userName="x"
                initialIsFollowing={false}
             >
                X Twitter
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName={name}
                formatUserName={formatUserName}
                initialIsFollowing
             >
             Davis Bremdow Salazar Roa
             </TwitterFollowCard>

             <TwitterFollowCard
                userName="claroperu"
                formatUserName={formatUserName}
                initialIsFollowing={true}
                >
                Claro Peru
             </TwitterFollowCard>

             <button onClick={ () => { setName("freddier") }}> Cambiar nombre (estado) </button>
        </section>
    )
}