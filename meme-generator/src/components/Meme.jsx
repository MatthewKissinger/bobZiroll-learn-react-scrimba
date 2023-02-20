import React from 'react';
import memeData from '../memesData';

export default function Meme() {
    const memesArray = memeData.data.memes;

    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        const randomNum = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNum].url;

        setMemeImage(url);
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
                    onClick={getMemeImage}
                >
                    Get a new meme image
                    <span className="material-symbols-outlined meme--button-image">
                    image
                    </span>
                </button>
            </div> 
            <img className='meme--image' src={memeImage}></img>
        </div>
    )
}