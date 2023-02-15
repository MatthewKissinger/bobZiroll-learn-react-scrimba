

export default function Card(props) {
    let badgeText;

    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card--container">   
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className='card--image' src={`../images/${props.coverImg}`} alt={props.coverImg}></img>
            <div className='card--rating-container'>
                <img className='card--star' src={`../images/star-icon.png`} alt='star icon'></img>
                <p className='card--rating-text'>{props.stats.rating} 
                    <span className='card--rating-text-gray'> ({props.stats.reviewCount}) &#x2022; {props.location}</span>
                </p>
            </div>
            <p className='card--title'>{props.title}</p>  
            <p className='card--price'><b>From ${props.price}</b> / person</p>
        </div>
    )
}