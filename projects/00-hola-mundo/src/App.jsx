import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='app'>
            <TwitterFollowCard userName="bremdows_dev" name="Davis Bremdow Salazar Roa" isFollowing={true}/>
            <TwitterFollowCard userName="ruth_juana" name="Ruth Espino Puma" isFollowing={false}/>
            <TwitterFollowCard userName="bremdows_dev" name="Davis Bremdow Salazar Roa" isFollowing={true}/>
        </section>
    )
}
