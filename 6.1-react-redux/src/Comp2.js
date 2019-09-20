import React from 'react';
import {connect} from 'react-redux';

// styling for component-1
const divStyle = {
    margin: '5px',
    border: '5px solid green',
    padding: '10px'
  };


class Comp2 extends React.Component
{
    state={DataofComp2:"Hello Delhi"};

    OnchnageText=(event)=>{
        this.setState({DataofComp2:event.target.value});
    }

    render(){
        return(
            <div style={divStyle}>
               ==Reducer Data== <br/>
                <i style={{color:'blue'}}>Component-1 Data</i> &nbsp;&nbsp; <label>{this.props.reducerData.DataofComp1}</label> <br/>
                <i style={{color:'green'}}>Component-2 Data</i> &nbsp;&nbsp;<label>{this.props.reducerData.DataofComp2}</label> <br/>
                ==Local Data==<br/>
                <label style={{color:'green'}}>{this.state.DataofComp2}</label><br/>
                <input type="text" placeholder="Write Text on component-2" onChange={this.OnchnageText} /> 
                <input type="button" value="Change Reducer-Data" onClick={()=>{ this.props.changeMydata(this.state.DataofComp2)}} />
            </div>
        );
    }
}

// comp1-props <--> reducer-state
const mapstateToProps=state=>{
return {reducerData:state.AllData}
}

// comp1-props  <--> reducer-dispatch   {event of component moves to dispatcher}
const mapDispatchToProps=(dispatch)=>
{
return{ changeMydata:(text)=>dispatch({type:"ChangeComp2Data",newData:text}) }
}

// coonet the state and dispatcher to the Props of Comp2  & export it.
export default connect(
    mapstateToProps,
    mapDispatchToProps  
)(Comp2);


