import React, { useState } from 'react'

export default function TextForm (props) {

    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClClick = () => {
        let newText = "";
        setText(newText)
    }
    const handleCopyClick = () => {
        const copyText = document.getElementById("myText");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }
    const handleExSpaceClick = () => {
        if (text.length >= 1) {
            const words = text.split(/\s+/);
            let newText = words.join(" ");
            setText(newText)
        }
    }
    const handleCapClick = () => {
        if (text.length >= 1) {
            const words = text.split(/\s+/);

            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }

            let newText = words.join(" ");
            setText(newText)
        }

    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    return (
        <><br />
            <div className="container">
                <h1>{props.heading}</h1>
                <br />
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${(props.mode === "light") ? "dark" : "light"}`} id="myText" value={text} onChange={handleOnChange} rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver To UpperCase</button>
                <button className="btn btn-success mx-1 my-1" onClick={handleLowerClick}>Conver To LowerCase</button>
                <button className="btn btn-warning mx-1 my-1" onClick={handleCapClick}>Conver To Capitalise</button>
                <button className="btn btn-secondary mx-1 my-1" onClick={handleExSpaceClick}>Remove extra Spaces</button>
                <button className="btn btn-dark mx-1 my-1" onClick={handleCopyClick}>Copy clipBoard</button>
                <button className="btn btn-danger mx-1 my-1" onClick={handleClClick}>Clear</button>
            </div>
            <div className="container my-2">
                <h2>Your text summery</h2>
                <p>{(text.length >= 1) ? text.split(" ").length : "0"} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
