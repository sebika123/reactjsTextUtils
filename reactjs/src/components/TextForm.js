import React,{useState} from 'react'




export default function TextForm(props) {
   

    const handleUpClick=()=>{
        console.log("uppercase" );
        let newText=text.toUpperCase();
        setText(newText);
    }

    
    const handleLowClick=()=>{
      console.log("uppercase" );
      let newText=text.toLowerCase();
      setText(newText);
  }
  

    const handleUpChange=(event)=>{
        console.log("changed");
        setText(event.target.value);
    }
    const[text,setText]=useState('');
  return (
    <>
    <div className="container">
    <h1>{props.heading}-</h1>
   
   
   <div className="mb-3">

  <textarea className="form-control" value={text}  onChange={handleUpChange} id="myBox" rows="10"></textarea>
  
  <button className="btn btn-dark mx-3" onClick={handleUpClick}>Uppercase</button>

  
  <button className="btn btn-dark mx-3" onClick={handleLowClick}>Lowercase</button>

</div>

  

    
    </div>
    <div className="container my-3" >
<h1>Text summary</h1>
<p>{text.split("").length}words andw
  {text.length}characters
<h4>Preview</h4>
<p>{text}</p>
</p>
    </div>
    </>
  )
}