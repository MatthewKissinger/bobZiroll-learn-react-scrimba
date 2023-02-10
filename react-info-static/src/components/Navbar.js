import logo from '../assets/react-logo.png';

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="react logo"></img>
            <h2 className="nav-title">ReactFacts</h2>
            <h3 className="nav-extra-title">React Course - Project 1</h3>
        </nav>
    )
}

export default Navbar;