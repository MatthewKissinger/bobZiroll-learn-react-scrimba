import memeData from '../memesData'

export default function Meme() {
    const memesArray = memeData.data.memes;

    function getRandomUrl() {
        const randomNum = Math.floor(Math.random() * 100);
        console.log(memesArray[randomNum].url);
    }

    return (
        <div className="meme--container">
            <div className="meme--form">
                <input 
                    className="meme--top-input" 
                    type="text" 
                    placeholder="top text"
                />
                <input 
                    className="meme--bottom-input" 
                    type="text" 
                    placeholder="bottom text"
                />
                <button 
                    onClick={getRandomUrl}
                >
                    Get a new meme image
                    <span className="material-symbols-outlined meme--button-image">
                    image
                    </span>
                </button>
            </div> 
        </div>
    )
}