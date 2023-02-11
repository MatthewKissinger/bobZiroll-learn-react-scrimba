import emailIcon from '../images/email-Icon.png';
import linkedinIcon from '../images/linkedin-Icon.png';

function ContactBtns() {
    return (
        <div className="contactBtns--container">
            <button className="contact--email-btn">
                <img alt="email icon" src={emailIcon}></img>
                <h3>Email</h3>
            </button>
            <button className="contact--linkedin-btn">
                <img alt="linkedin icon" src={linkedinIcon}></img>
                <h3>LinkedIn</h3>
            </button>
        </div>
    )
}

export default ContactBtns;