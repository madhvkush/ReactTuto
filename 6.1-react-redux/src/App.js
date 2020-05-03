import React from "react";
import "./App.css";
import ConnectedComp1 from "./Comp1";
import ConnectedComp2 from "./Comp2";
import ConnectedSharedComponent from "./SharedComp";

function App() {
  return (
    <div className="App">
      <ConnectedComp1 />
      <ConnectedComp2 />
      <ConnectedSharedComponent />
    </div>
  );
}

export default App;
