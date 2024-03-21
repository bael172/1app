import React from 'react';
import ReactDOM from 'react-dom/client';
import {createContext} from 'react'
//import reportWebVitals from './reportWebVitals'

import App from './App'
import UserStore from './store/userStore'
export const User = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User.Provider value ={
      {user: new UserStore()}}>
      <App/>
    </User.Provider>,
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
