import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';

// console.log(
//   `
//   Reign | Junior Web Developer
//   ****************************************************
//   * Programador: Marco Velasquez Figarella
//   * Correo: marcovelasquez90@hotmail.com
//   * Correo secundario: marcovf.90@gmail.com

//   * Portafolio: https://marco90v.github.io/Portafolio/
//   * CV: https://marco90v.github.io/Portafolio/CV/
//   * Github: https://github.com/Marco90v
//   * Linkedin: https://www.linkedin.com/in/marco90v/
//   * **************************************************`
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
