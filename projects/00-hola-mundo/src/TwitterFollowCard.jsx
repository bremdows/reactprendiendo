import { useState } from 'react'

import './App.css'

export function TwitterFollowCard({children, userName, name, formatUserName, initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
    const classButton = isFollowing
    ? 'br-followCard-button is-following'
    : 'br-followCard-button'

    console.log("[Comp] Actualizado desde: " + userName)


    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article 
            // style={{display:'flex', alignItems:'center'}}
            className='br-followCard'
        >
            <header className='br-followCard-header'>
                <img src={`https://unavatar.io/x/${userName}`} alt="Logo marca" className='br-followCard-avatar'/>
                <div className='br-followCard-info'>
                    <strong className='br-followCard-infoUserName'>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                    <p>{children}</p>
                </div>
            </header>
            <aside>
                <button className={classButton} onClick={handleClick}>
                     {textButton}
                </button>
            </aside>
        </article>
    )
}