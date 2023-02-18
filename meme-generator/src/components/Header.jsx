import trollFaceImg from "../assets/images/troll-face.png"

export default function Header() {
    return (
        <header>
            <img src={trollFaceImg}></img>
            <h2 className="header--logo-text">Meme Generator</h2>
            <h4 className="header--title">React Course - Project 3</h4>
        </header>
    )
}