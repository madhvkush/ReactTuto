import React from 'react';
import ReactDOM from 'react-dom';
import MainComp from './MainComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
