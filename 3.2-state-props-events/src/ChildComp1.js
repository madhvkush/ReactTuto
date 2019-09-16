import React from 'react';

const divStyle = {
    margin: '5px',
    border: '5px solid green',
    padding: '10px'
  };

class ChildComp1 extends React.Component
{
    render()
    {
        return(
            <div style={divStyle}>
            <label>Write On Component 1</label><br/>
            <input type="text" placeholder="Write here." onChange={this.props.handleOnChange} />
            </div>
        )
    }
}

export default ChildComp1;