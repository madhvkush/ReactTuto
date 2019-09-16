import React from 'react';

const divStyle = {
    margin: '5px',
    border: '5px solid pink',
    padding: '10px'
  };

class ChildComp2 extends React.Component
{
    render()
    {
        return(
            <div style={divStyle}>
            <label>Display On Component 2</label><br/>
            <label>{this.props.myText}</label>
            </div>
        )
    }
}

export default ChildComp2;