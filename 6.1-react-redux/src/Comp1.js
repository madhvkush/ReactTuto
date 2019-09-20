import React from 'react';
import {connect} from 'react-redux';

// styling for component-1
const divStyle = {
    margin: '5px',
    border: '5px solid blue',
    padding: '10px'
  };


class Comp1 extends React.Component
{
    state={DataofComp1:"Hello India"};

    OnchnageText=(event)=>{
        this.setState({DataofComp1:event.target.value});
    }

    render(){
        return(
            <div style={divStyle}>
                ==Reducer Data== <br/>
                <i style={{color:'blue'}}>Component-1 Data</i> &nbsp;&nbsp; <label>{this.props.reducerData.DataofComp1}</label> <br/>
                <i style={{color:'green'}}>Component-2 Data</i> &nbsp;&nbsp;<label>{this.props.reducerData.DataofComp2}</label> <br/>
                ==Local Data==<br/>
                <label style={{color:'blue'}}>{this.state.DataofComp1}</label><br/>
                <input type="text" placeholder="Write Text on component-1" onChange={this.OnchnageText} /> 
                <input type="button" value="Change Reducer-Data" onClick={()=>{this.props.changeMydata(this.state.DataofComp1)}} />
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
return{ changeMydata:(text)=>dispatch({type:"ChangeComp1Data",newData:text}) }
}

// coonet the state and dispatcher to the Props of Comp1  & export it.
export default connect(
    mapstateToProps,
    mapDispatchToProps  
)(Comp1);


