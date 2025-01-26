import React, { useState } from "react";
import "./App.css";
import CompWithTypeScript from "./CompWithTypeScript";

/**
 * App State Model
 */
interface AppState {
  fName: string;
  lName: string;
  age: number;
}

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    fName: "Madhv",
    lName: "Singh",
    age: 27,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    switch (name) {
      case "fName":
        setState((prevState) => ({ ...prevState, fName: value }));
        break;
      case "lName":
        setState((prevState) => ({ ...prevState, lName: value }));
        break;
      case "age":
        if (Number(value)) {
          setState((prevState) => ({ ...prevState, age: Number(value) }));
        } else if (value !== "") {
          alert("Age must be number");
          setState((prevState) => ({ ...prevState, age: 0 }));
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <CompWithTypeScript
        fName={state.fName}
        lName={state.lName}
        age={state.age}
        onChange={onChange}
      />
      <div>
        <br />
        <p>
          Note: To create a React app with TypeScript, use the following
          command:{" "}
          <code>npx create-react-app my-app --template typescript</code>
        </p>
      </div>
    </div>
  );
};

export default App;
