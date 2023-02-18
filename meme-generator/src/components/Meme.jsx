

export default function Meme() {
    return (
        <div className="meme--container">
            <input className="meme--top-input" type="text" />
            <input className="meme--bottom-input" type="text" />
            <button>Get a new meme image
                <span class="material-symbols-outlined meme--button-image">
                image
                </span>
            </button>
        </div>
    )
}