/*
 * @Author: zxy
 * @Date: 2022-04-11 14:33:08
 * @LastEditTime: 2022-04-11 15:18:11
 * @FilePath: /sku-react-d/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';

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
