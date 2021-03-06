import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter, HashRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL+'/'}>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

