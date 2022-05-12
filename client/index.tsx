import React from 'react';
import RenderDOM from 'react-dom';
import App from './src/App';

const domContainer = document.querySelector('#root');

RenderDOM.render(<App />, domContainer);
