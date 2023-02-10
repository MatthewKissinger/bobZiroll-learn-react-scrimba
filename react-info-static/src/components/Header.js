import logo from '../assets/react-logo.png';

function Header() {
    return (
        <header>
            <nav>
                <img src={logo} className="nav-logo" alt='react logo'></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header> 
    )
}

export default Header;