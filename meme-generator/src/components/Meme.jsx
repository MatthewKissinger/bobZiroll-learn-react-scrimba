import React from 'react';
import memeData from '../memesData';

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData);

    // const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNum].url;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        });
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
            <img 
                className='meme--image' 
                src={meme.randomImage}>
            </img>
        </div>
    )
}