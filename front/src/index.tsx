import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './assets/css/GlobalStyles';

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
