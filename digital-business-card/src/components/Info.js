import headshot from "../images/matt_kissinger_pic.jpg"

function Info() {
    return (
        <div className="info--container">
            <img className="info--image" alt="matt kissinger headshot" src={headshot}></img>
            <h2 className="info--name">Matt Kissinger</h2>
            <h3 className="info--title">Frontend Developer</h3>
            <h4 className="info--website">mattkissinger.com</h4>
        </div>
    )
}

export default Info;