import React from "react";
import { connect } from "react-redux";

const divStyle = {
  margin: "5px",
  border: "5px solid red",
  padding: "10px",
};

const SharedComp = (props) => {
  return (
    <div style={divStyle}>
      <i style={{ color: "blue" }}>{props.Comp1Data}</i> &nbsp;&nbsp;
      <br />
      <i style={{ color: "green" }}>{props.Comp2Data}</i> &nbsp;&nbsp;
    </div>
  );
};

//Shared-props <--> reducer-state
const mapStateToProps = (rootState) => {
  console.log(rootState);
  return {
    Comp1Data: rootState.Comp1Reducer.DataOfComp1,
    Comp2Data: rootState.Comp2Reducer.DataOfComp2,
  };
};

const ConnectedSharedComponent = connect(mapStateToProps, {})(SharedComp);
export default ConnectedSharedComponent;
