import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CompUSestate from "./CompUSestate";
import CompUseEffect from "./CompUseEffect";

function App() {
  return (
    <div className="App">
      <h1>Hooks are used with functional components</h1>
      <ul>
        <li>Basic Hooks</li>
        <ul>
          <li>useState</li>
          <li>useEffect</li>
          <li>useContext</li>
        </ul>
        <li>Additional Hooks</li>
        <ul>
          <li>useReducer</li>
          <li>useCallback</li>
          <li>useMemo</li>
          <li>useRef</li>
          <li>useLayoutEffect</li>
          <li>useImperativeHandle</li>
          <li>useId</li>
          <li>useDeferredValue</li>
          <li>useTransition</li>
        </ul>
      </ul>
      <Link to="https://reactjs.org/docs/hooks-overview.html" target="_blank">
        Reference
      </Link>
      <CompUSestate />
      <CompUseEffect />
    </div>
  );
}

export default App;
