import React,{useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const upclick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase!", "success");
    };
    const loclick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase!", "success");
    };
    const handleonchange = (event)=>{
        setText(event.target.value);
    };
    const clear = ()=>{
        let textclear = "";
        setText(textclear);
        props.showAlert("Text box cleared!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    return (
        <>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#383838'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleonchange} value={text} id="txt" rows="8" style={{backgroundColor: props.mode==='dark'?'#383838':'white', color: props.mode==='dark'?'white':'#383838'}}></textarea>
            </div>
            <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={upclick}>Capitalize</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={loclick}>Lowerize</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary " onClick={clear}>clear the text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#383838'}}>
            <h3>Text summary</h3>
            <p>{text.split(" ").length}  words and {text.length} characters</p>
            <p>Time taken to read: <b>{text.split(" ").length * 0.008} minutes</b></p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
};