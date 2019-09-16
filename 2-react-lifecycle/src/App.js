import React from 'react';
import Comp1 from './Comp1';
import './App.css';

function App() {
  return (
    <>
    <Comp1/>
    <br/>
    Output:- <br/>
  <ol>
    <li>Contructor</li>
<li>getDerivedStateFromProps</li> 
<li>render</li>
<li>componentDidMount</li>
<li>On click Button</li>
<li>getDerivedStateFromProps</li>
<li>render</li>
<li>componentDidUpdate</li>
</ol>
    </>
  );
}

export default App;
