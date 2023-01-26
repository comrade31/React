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
    // setText("You have clicked on handleUpClick")
  }

  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);    
  }
  const [text, setText] = useState('Enter text here'); 
  // text = "new text"; // Wrong way to change the state
  // setText("nex text"); // Right way to change the state  

  return (
    <>
    <div className="container">
    <h3>{props.heading}</h3>
<div className="mb-3=true">
  <textarea className="form-control" value= {text} onChange= {handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className= "btn btn-danger mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className= "btn btn-danger mx-1" onClick={handleLowClick}>Convert to Lowercase</button>

{/* mx-..etc is a bootstrap class it gives margin in X , mb-...etc is give margin in Y   */}

    </div>
    <div className="container mb-3=true" >
      <h1>My text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} charasters</p>
      <p>{text.split(" ").length} words and {text.length} charasters</p>
      <p>{ 0.008* text.split(" ").length}  Minitues to Read...!</p>
       <h2>Preview</h2>
       <p>{text}</p>
    </div>
    </>

  )
}
 