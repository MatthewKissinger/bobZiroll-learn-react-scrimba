import worldIcon from '../assets/images/world-icon.png'

export default function Header() {
    return (
        <header>
            <img src={worldIcon}></img>
            <p>my travel journal.</p>
        </header>
    )
}