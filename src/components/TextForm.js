import React, {useState} from 'react'

export default function TextForm(props)
{
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleUpClick = () =>{
        setText(text.toUpperCase());
        props.showAlert("Text is converted to upper case","success");
    }
    const handleLoClick = () =>{
        setText(text.toLowerCase())
        props.showAlert("Text is converted to lower case","success");
    }
    const handleClearCase = ()=> {
        setText('');
        props.showAlert("Text is cleared","success");
    }
    const handleRemoveSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const handleCopyText = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied","success");
    }
    const [text, setText] = useState('');
    // text = "Changed text"; - wrong way to change text
    // setText("Change the text") - correct way
    return (
        <>
        <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor: props.mode==='dark'?'#041525':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Text</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Text</button>
            <button className="btn btn-primary mx-2" onClick={handleClearCase}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.length === 0 ? 0 : text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text to preview"}</p>
        </div>
        </>
    )
}
