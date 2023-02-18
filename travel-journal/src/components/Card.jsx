import mapPinIcon from "../assets/images/map_pin_icon.png"

export default function Card(props) {
    return (
        <div className="card--container">
            <img className="card--image" src={props.imageUrl}></img>
            <div className="card--info--container">
                <div className="card--location--container">
                    <img className="card--map-icon" src={mapPinIcon}></img>
                    <p className="card--location">{props.location}</p>
                    <p className="card--maps-link">View on Google Maps</p>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <div className="card--dates">
                    <p className="card--start-date">{props.startDate}</p> - 
                    <p className="card--end-date">{props.endDate}</p>
                </div>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}