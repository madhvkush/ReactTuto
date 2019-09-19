import React from 'react';
import {connect} from 'react-redux';

// styling for component-1
const divStyle = {
    margin: '5px',
    border: '5px solid black',
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
                 <label>Component-1 Data &nbsp;&nbsp;{this.props.reducerData.DataofComp1}</label> <br/>
                <label>Component-2 Data &nbsp;&nbsp;{this.props.reducerData.DataofComp2}</label> <br/>
                <label>{this.props.reducerData.DataofComp2}</label> <br/>
                Local Data:-
                <label>{this.state.DataofComp2}</label>
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


