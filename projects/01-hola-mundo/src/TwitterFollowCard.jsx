import { useState } from 'react'

import './App.css'

export function TwitterFollowCard({children, userName, formatUserName, initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
    const classButton = isFollowing
    ? 'br-followCard-button is-following'
    : 'br-followCard-button'

    const classNotFollowSpan = isFollowing
    ? "br-followcard-button-not-follow is-following"
    : "br-followCard-button-not-follow"

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
                    <strong className='br-followCard-infoUserName'>{children}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={classButton} onClick={handleClick}>
                     <span className='br-followCard-button-text'>{textButton}</span>
                     <span className='br-followCard-button-not-follow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}