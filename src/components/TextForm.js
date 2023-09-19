import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked!'+text);
        let newText = text.toUpperCase();
        setTimeout(() => {
        }, 1500);
        setText(newText)
        props.showAlert("! Converted to Upper Case.", "success")
    }
    const handleLowClick = ()=>{
        // console.log('LowerCase was clicked!'+text);
        setTimeout(() => {
        }, 1500);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("! Converted to Lower Case.", "success")
    }
    const handleClearClick = ()=>{
        // console.log('LowerCase was clicked!'+text);
        setTimeout(() => {
        }, 1500);
        let newtext = '';
        setText(newtext)
        props.showAlert("! Text cleared.", "success")
    }
    const handleCopy = ()=>{
        setTimeout(() => {
        }, 1500);
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("! Text copied.", "success")
    }
    const handleExtraSpaes = ()=>{
        setTimeout(() => {
        }, 1500);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("! Extra spaces removed from the text.", "success")
    }
    const handleonChange = (event)=>{
        console.log('onChange');
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // const [wordcount, setWordcount] = useState(null);
  return (
    <>
        <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handleonChange} style = {{backgroundColor: props.mode==='dark'?'#03021F':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-3 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-success mx-3 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-success mx-3 my-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-success mx-3 my-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-success mx-3 my-2" onClick={handleExtraSpaes}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes taken to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text : 'Enter something in the textbox above to preview it here'}</p>
        </div>
    </>
  )
}
