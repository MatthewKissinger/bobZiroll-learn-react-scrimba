import photoGrid from '../images/airbnb_cluster_photo.png';

export default function Hero() {
    return (
        <div className='hero--container'>
            <img className='hero--image' src={photoGrid} alt="grid of photos for different activities"></img>
            <h1 className='hero--title'>Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
        </div>
    )
}