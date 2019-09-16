import React from 'react';
import './App.css';

import  CompWithTypeScript from './CompWithTypeScript';

interface Appstate
{
  fName:string;
  lName:string;
  age:number;
}

class App extends React.Component<{},Appstate> {

  state={fName:"Madhv",lName:"Singh",age:27}

   onChange=(event:any)=>{
     //alert(event.target.name);
     switch(event.target.name)
    {
      case "fName":{this.setState({fName:event.target.value});} break;
      case "lName":{this.setState({lName:event.target.value});} break;
      case "age":{
        if(Number(event.target.value))
        this.setState({age:event.target.value});
        else if(event.target.value!="") {alert("Age must be number");
        this.setState({age:0});}
      } break;
       default:{this.setState({...this.state})} break;
    }
  }

  render(){
    //alert("render called");
  return (
    <div className="App">
      <CompWithTypeScript fName={this.state.fName} lName={this.state.lName} age={this.state.age} 
      onChange={this.onChange}  />
      </div>
  );
}
}

export default App;
