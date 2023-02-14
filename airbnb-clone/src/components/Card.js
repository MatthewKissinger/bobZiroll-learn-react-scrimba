import katieImg from '../images/katie.png';
import starIcon from '../images/star-icon.png';

export default function Card(props) {
    return (
        <div className="card--container">   
            <img className='card--image' src={katieImg} alt="Katie Zaferes"></img>
            <div className='card--rating-container'>
                <img className='card--star' src={starIcon} alt='star icon'></img>
                <p className='card--rating-text'>5.0 <span className='card--rating-text-gray'>(6) &#x2022; USA</span></p>
            </div>
            <p className='card--title'>Life lessons with Katie Zaferes</p>  
            <p className='card--price'><b>From $136</b> / person</p>
            
        </div>
    )
}