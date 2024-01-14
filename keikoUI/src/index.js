import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Importing the App component from App.js

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Rendering the App component */}
  </React.StrictMode>,
  document.getElementById('root')  // Rendering into the 'root' element in public/index.html
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
