import starIcon from '../images/star-icon.png';

export default function Card(props) {
    return (
        <div className="card--container">   
            <img className='card--image' src={require(`../images/${props.img}`)} alt="Katie Zaferes"></img>
            <div className='card--rating-container'>
                <img className='card--star' src={starIcon} alt='star icon'></img>
                <p className='card--rating-text'>{props.rating} <span className='card--rating-text-gray'>({props.reviewCount}) &#x2022; {props.country}</span></p>
            </div>
            <p className='card--title'>{props.title}</p>  
            <p className='card--price'><b>From ${props.price}</b> / person</p>
            
        </div>
    )
}