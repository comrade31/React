import React, {useState} from 'react'
// Here we are import Hook {useState}  

// Why Hooks =>  Kyoki Hooks bina class banaye, class ke fetuers banaye m helpful hote h . 

 // Declare a new state variable, which we'll call "count"
   
//  always Write this inside Component
//  const [text, setText] = useState('Enter text here'); 

 // Simply yaha hm kh rhe h ki , hamari jo value h wo [text, setText] text form m h , or isko hm setText function ke throw krenge . or 'Enter text here' yh hamari Defalut value h .

export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    setTimeout(function(){ alert("Converted into Uppercase"); }, 300);
    // setText("You have clicked on handleUpClick")
  }
  
  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    setTimeout(function(){ alert("Converted into Loswercase"); }, 300);

  }

  const handleSentencecaseClick = () => {
    console.log("Sentence case was clicked" + text);

    // text[0] || ChartAt(0) doth work are same 

    const newText = text.replace(/(?<=(?:^|[.?!])\W*)[a-z, A-Z]/g, i => i.toUpperCase());
    setText(newText);
    setTimeout(function(){ alert("Converted into Sentence case"); }, 300);


  }

  const handleCopyTextClick = () => {
    console.log("Copy text was clicked" + text);
    navigator.clipboard.writeText(text)
    setTimeout(function(){ alert("Text Copied"); }, 300);

  }

  const handleClearClick = () => {
    console.log("Clear text was clicked" + text);
    let newText = ' ';
    setText(newText);
    setTimeout(function(){ alert("Text Cleared"); }, 300);


  }


  
  
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);    
  }
  const [text, setText] = useState('Defalut Text'); 
  // text = "new text"; // Wrong way to change the state
  // setText("nex text"); // Right way to change the state  

  return (
    <>
    <div className="container">
    <h2>{props.heading}</h2>
<div className="mb-3 = true">
  <textarea className="form-control" value= {text} onChange= {handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className= "btn btn-danger mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className= "btn btn-danger mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className= "btn btn-danger mx-2" onClick={handleSentencecaseClick}>Sentence case</button>
<button className= "btn btn-danger mx-2" onClick={handleCopyTextClick}>Copy text</button>
<button className= "btn btn-danger mx-2" onClick={handleClearClick}>Clear text</button>



{/* mx-..etc is a bootstrap class it gives margin in X , mb-...etc is give margin in Y   */}

    </div>
    <div className="container mb-3 = true" >
      <h3>My text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} charasters</p>
      <p>{text.split(" ").length} words and {text.length} charasters</p>
      <p>{ 0.008* text.split(" ").length}  Minitues to Read...!</p>
       <h3>Preview</h3>
       <p>{text}</p>
    </div>
    </>

  )
}
 