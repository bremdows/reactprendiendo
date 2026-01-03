import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (userName) => `@${userName}`

    const [nombre, setName] = useState("bremdows_dev")

    const users = [
        {
            name :	 'Davis Bremdow Salazar Roa',
            siguiendo : true,
            userName : 'bremdows_dev'
        },
        {
            name  : 'Freddy',
            siguiendo : false,
            userName : 'freddier'
        },
        {
            name  : 'Ter',
            siguiendo :  true,
            userName : 'tercosmicqueen'
        },
        {
            name  : 'Miguel Angel Durán',
            siguiendo :  true,
            userName : 'midudev'
        }
    ]   

    return (
        <section className='app'>

            {
                users.map(({name, isFollowing, userName}) => {
                // const {name, isFollowing, userName} = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            formatUserName={formatUserName}
                            initialIsFollowing={isFollowing}
                            userName = {userName}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

            {/* <TwitterFollowCard 
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
             </TwitterFollowCard> */}

             <button onClick={ () => { setName("freddier") }}> Cambiar nombre (estado) </button>
        </section>
    )
}