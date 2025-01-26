import React from "react";
import { connect } from "react-redux";
import { Comp1ActionTypes } from "./Reducer/ActionTypes";

// styling for component-1
const divStyle = {
  margin: "5px",
  border: "5px solid blue",
  padding: "10px",
};

class Comp1 extends React.Component {
  state = { DataOfComp1: "Hello India" };

  handleOnChangeText = (event) => {
    this.setState({ DataOfComp1: event.target.value });
  };

  handleOnClickUpdateStore = () => {
    this.props.updateStore(this.state.DataOfComp1);
  };

  render() {
    return (
      <div style={divStyle}>
        ==Local Data==
        <br />
        <label style={{ color: "blue" }}>{this.state.DataOfComp1}</label>
        <br />
        <input
          type="text"
          placeholder="Write Text on component-1"
          onChange={this.handleOnChangeText}
        />
        <input
          type="button"
          value="Update Store"
          onClick={this.handleOnClickUpdateStore}
        />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};
// comp1-props  <--> reducer-dispatch   {event of component moves to dispatcher}
const mapDispatchToProps = (dispatch) => {
  return {
    updateStore: (text) => {
      dispatch({ type: Comp1ActionTypes.StartUpdate, newData: text });

      setTimeout(() => {
        dispatch({ type: Comp1ActionTypes.Update_Comp1, newData: text });
      }, 2000);

      setTimeout(() => {
        dispatch({ type: Comp1ActionTypes.FinishUpdate, newData: text });
      }, 3000);
    },
  };
};

// connect the state and dispatcher to the Props of Comp1  & export it.
const ConnectedComp1 = connect(mapStateToProps, mapDispatchToProps)(Comp1);
export default ConnectedComp1;
