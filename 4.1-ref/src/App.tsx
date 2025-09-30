import React from "react";
import "./App.css";
import { AnimatedElement } from "./AnimatedElement/AnimatedElement";
import { FocusableInput } from "./FocusableInput";

function App() {
  return (
    <div className="App">
      <p>
        Use <code style={{ color: "maroon" }}>useRef</code> hook
      </p>
      <br />

      <AnimatedElement />
      <br />
      <br />
      <FocusableInput />

      <br />
      <p>
        The ultimate goal of using ref in React is to provide a way to directly
        access and interact with DOM elements or React elements.
      </p>
    </div>
  );
}

export default App;
