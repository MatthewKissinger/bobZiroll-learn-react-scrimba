import React from 'react';
import memeData from '../memesData';

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData);

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

    function handleChange(e) {
        const { name, value } = e.target;

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="meme--container">
            <div className="meme--form">
                <input
                    name="topText" 
                    className="top--input" 
                    type="text" 
                    placeholder="top text"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    name="bottomText" 
                    className="bottom--input" 
                    type="text" 
                    placeholder="bottom text"
                    onChange={handleChange}
                    value={meme.bottomText}
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
            <div className='meme'>
                <img 
                    className='meme--image' 
                    src={meme.randomImage}>
                </img>
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>   
        </div>
    )
}