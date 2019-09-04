import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comp1 from './Comp1'

function App() {
  return (
    <div className="App">
      <h3>General Demo of State and Props</h3>
      
       {/* Pass the Properties which you want inside the props */}
      <Comp1 name='Diksha'/>
     </div>
  );
}

export default App;
