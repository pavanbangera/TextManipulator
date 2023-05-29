import React, { useState } from 'react'

export default function TextForm (props) {

    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleClClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Cleared Text", "warning")
    }
    const handleCopyClick = () => {
        const copyText = document.getElementById("myText");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied", "success")
    }
    const handleExSpaceClick = () => {
        if (text.length >= 1) {
            const words = text.split(/\s+/);
            let newText = words.join(" ");
            setText(newText)
            props.showAlert("Removed Extra spaces", "success")
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
            props.showAlert("Capitalised", "success")
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
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver To UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLowerClick}>Conver To LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleCapClick}>Conver To Capitalise</button>
                <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleExSpaceClick}>Remove extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-dark mx-1 my-1" onClick={handleCopyClick}>Copy clipBoard</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClClick}>Clear</button>
            </div>
            <div className="container my-2">
                <h2>Your text summery</h2>
                <p>{text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{(text.length >= 1) ? text : "No Preview"}</p>
            </div>

        </>
    )
}
