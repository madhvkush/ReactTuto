import React, {useState,useEffect} from 'react';

const divStyle = {
    margin: '5px',
    border: '5px solid black',
    padding: '10px'
  };
 const CompUseEffect=()=>
{
    //By using Array destructuring; 
    //count variblae set to 0.
    //setCount function is uses for change the state of count.
    const[ name,setName]=useState("Hello India");

    // Will fire on change the textbox text
  const  OnChangeHandler=(event)=>{setName(event.target.value)}
  
  // Use effect will be fire whenEver you set the Name
  useEffect(()=>{ document.getElementById("divcharacterCount").innerHTML=name.length; });

 return(
    <div style={divStyle}>
        <h3>useState() & useEffect()</h3>
        <input type="text" placeholder="Write your text here" onChange={OnChangeHandler} /> <br/>
        <label>{name}</label> <br/>
        Text string Length:-
        <label id="divcharacterCount"></label>
    </div>
 );
}

export default CompUseEffect;