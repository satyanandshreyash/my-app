// import React, { useState } from 'react'

export default function About(props) {
    
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [BtnText, setBtnText] = useState('Enable Dark Mode')
    let myStyle = {
        color: props.mode ==='dark'?'white':'rgb(63 72 90)',
        backgroundColor: props.mode ==='dark'?'rgb(63 72 90)':'white'
    }

    
  return (
    <div>
        <div className="container" style = {{color: props.mode ==='dark'?'white':'rgb(61 81 117)'}}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style = {myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {myStyle}>
                        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count or quickly changing it to lower or upperase.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style = {myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {myStyle}>
                        TextUtils is a free charater counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. This is suitable for writing text with word/ charater limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style = {myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {myStyle}>
                        This word counter software works in any web browser such as Chrome, Firefox, Internet explorer, Safari, Edge, Brave, Opera. It suits to count words in Facebook, blog, books, excel document, pdf document, essays etc.
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </div>
  )
}
