import React, {useState} from 'react';

const divStyle = {
    margin: '5px',
    border: '5px solid pink',
    padding: '10px'
  };
 const CompUSestate=()=>
{
    //By using Array destructuring; 
    //count variblae set to 0.
    //setCount function is uses for change the state of count.
    const[ name,setName]=useState("Hello India");

  const  OnChangeHandler=(event)=>{setName(event.target.value)}
 return(
    <div style={divStyle}>
      <h3>useState()</h3>
        <input type="text" placeholder="Write your text here" onChange={OnChangeHandler} /> <br/>
        <label>{name}</label>
    </div>
 );
}

export default CompUSestate;