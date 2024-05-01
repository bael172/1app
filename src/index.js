import React, { createContext } from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './App'; 
import UserStore from './context/userContext'
export const User = createContext(null) 
 
ReactDOM.render(
  <React.StrictMode> 
  <User.Provider value = {{ 
    user: new UserStore() 
  }}> 
    <App/> 
  </User.Provider>,     
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
