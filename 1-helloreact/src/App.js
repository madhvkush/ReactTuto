import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <h3>Folder Structure of React</h3>
      <ul>
        <li>public
          <ul>
            <li>index.html --> a page having div to render parent component</li>
            <li>manifest.json</li>
            <li>To access any file or content from public folder use <code><strong> %PUBLIC_URL%/</strong></code></li>
          </ul>
        </li>
        <li>src
          <ul>
            <li>index.js --><code>Importing react libraries <br/>
              <strong> import React from 'react';</strong> <br/>
              <strong> import ReactDOM from 'react-dom';</strong></code>
              </li>
          </ul>
        </li>
        <li>package.json --> Contains all used packeges info</li>
      </ul>
    </div>
  );
}

export default App;
