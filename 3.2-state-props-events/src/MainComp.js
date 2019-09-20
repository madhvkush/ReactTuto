import React from 'react';
import  ChildComp1 from './ChildComp1';
import  ChildComp2 from './ChildComp2';

const divStyle = {
  paddding: '50px',
  border: '5px solid black'
};

const alignCenter = {
  textAlign:'center'
};
// This is main Component 
class MainComp extends React.Component  {

  // It will called when the Childcom-1 Textbox would be change
  handleOnChange=(event)=>{this.setState({myText:event.target.value})}

  state={myText:'Initial Text'}

  render(){
  return (
    <div style={divStyle}>
      <label style={alignCenter}>This is Main component</label>
     <ChildComp1 handleOnChange={this.handleOnChange}/> <br/>
     <ChildComp2 myText={this.state.myText}/>
    </div>
  );
  }
}

export default MainComp;


// Note:- Most probably the Props-fields of child component should be Given by the state-fields of Parent component