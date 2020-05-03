import React from "react";
import { connect } from "react-redux";
import { Update_Comp2 } from "./Reducer/ActionTypes";

// styling for component-2
const divStyle = {
  margin: "5px",
  border: "5px solid green",
  padding: "10px",
};

class Comp2 extends React.Component {
  state = { DataOfComp2: "Hello Delhi" };

  handleOnChangeText = (event) => {
    this.setState({ DataOfComp2: event.target.value });
  };

  handleOnClickUpdateStore = () => {
    this.props.updateStore(this.state.DataOfComp2);
  };

  render() {
    return (
      <div style={divStyle}>
        ==Local Data==
        <br />
        <label style={{ color: "green" }}>{this.state.DataOfComp2}</label>
        <br />
        <input
          type="text"
          placeholder="Write Text on component-2"
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
// comp2-props  <--> reducer-dispatch   {event of component moves to dispatcher}
const mapDispatchToProps = (dispatch) => {
  return {
    updateStore: (text) => dispatch({ type: Update_Comp2, newData: text }),
  };
};

// connect the state and dispatcher to the Props of Comp2  & export it.
const ConnectedComp2 = connect(mapStateToProps, mapDispatchToProps)(Comp2);
export default ConnectedComp2;
