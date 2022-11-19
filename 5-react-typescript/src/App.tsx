import React from "react";
import "./App.css";

import CompWithTypeScript from "./CompWithTypeScript";

/**
 * App State Model
 */
interface Appstate {
  fName: string;
  lName: string;
  age: number;
  //Note:- Mostly it should have the props of child components
}

class App extends React.Component<{}, Appstate> {
  state = { fName: "Madhv", lName: "Singh", age: 27 };

  onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (
      event.target.name //Note:- currentTarget can be uses in place of target
    ) {
      case "fName":
        this.setState({ fName: event.target.value });
        break;
      case "lName":
        this.setState({ lName: event.target.value });
        break;
      case "age":
        if (Number(event.target.value))
          this.setState({ age: Number(event.target.value) });
        else if (event.target.value !== "") {
          alert("Age must be number");
          this.setState({ age: 0 });
        }
        break;
      default:
        this.setState({ ...this.state });
        break;
    }
  };

  render() {
    //alert("render called");
    return (
      <div className="App">
        <CompWithTypeScript
          fName={this.state.fName}
          lName={this.state.lName}
          age={this.state.age}
          onChange={this.onChange}
        />
        <div>
          <br />
          <p>
            Note:- React App with TypeScript:{" "}
            <code>npx create-react-app my-app --template typescript</code>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
