import React from 'react';
import ReactDOM from 'react-dom/client';
import './investigate.css';
import Investigateapp from './investigate';
import reportWebVitals from '../reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('Investigate'));
root.render(
  <React.StrictMode>
    <Investigateapp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
