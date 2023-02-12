import twitterIcon from '../images/Twitter Icon.png'
import facebookIcon from '../images/Facebook Icon.png'
import instagramIcon from '../images/Instagram Icon.png'
import githubIcon from '../images/GitHub Icon.png'

export default function Footer() {
    return (
        <div className='footer--container'>
            <img src={twitterIcon} alt="twitter icon"/>
            <img src={facebookIcon} alt="facebook icon"/>
            <img src={instagramIcon} alt="instagram icon"/>
            <img src={githubIcon} alt="github icon"/>
        </div>
    )
}