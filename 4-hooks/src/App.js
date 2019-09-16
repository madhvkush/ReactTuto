import React from 'react';
import './App.css';
import CompUSestate from './CompUSestate';
import CompUseEffect from './CompUseEffect';

function App() {
  return (
    <div className="App">
    <h1>Hooks are used with functional components</h1>
    <a target="_blank" href="https://reactjs.org/docs/hooks-overview.html">Reference</a>
    <CompUSestate />
    <CompUseEffect/>
    </div>
  );
}

export default App;
