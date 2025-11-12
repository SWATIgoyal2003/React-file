import React, { useState } from 'react'

function Textform(props) {
    const [text, setText] = useState("");
    const [fontFamily, setFontFamily] = useState('inherit');

    const cilckTochange = () => {
        setText(text.toLowerCase());
    }

    const clickToUpperCase = () => {
        setText(text.toUpperCase());
    }

    // Toggle the textarea font between the default and a cursive font-family.
    const toggleCursive = () => {
        setFontFamily(prev => prev === 'inherit' ? 'Dancing Script, Brush Script MT, cursive' : 'inherit');
    }
    const toggleItalic = () => {
        setFontFamily(prev => prev === 'inherit' ? 'italic' : 'inherit');
    }

    const TextaeraChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="container my-1">
            <label htmlFor="exampleFormControlTextarea1" className="form-label my-3">{props.label}</label>
            <textarea
                className="form-control"
                value={text}
                id="exampleFormControlTextarea1"
                onChange={TextaeraChange}
                rows="8"
                placeholder={props.placeholder}
                style={{ fontFamily }}
            />
            <button className="btn btn-primary my-3" onClick={cilckTochange}>Lowercase change</button>
            <button className="btn btn-primary mx-3 my-3" onClick={clickToUpperCase}>Upper Case</button>
            <button className="btn btn-primary mx-3 my-3"  onClick={toggleCursive}>cursive</button>
            <button className="btn btn-primary mx-3 my-3" onClick={toggleItalic}>italic</button>
        </div>
    )
}

export default Textform;