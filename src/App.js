import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';
import axios from 'axios';
import Popup from 'reactjs-popup';


const App = (props) => {

  const [user, setUser] = useState((JSON.parse(localStorage.getItem('user'))))
  const [showPopUp, setPopUp] = useState (false) 
    
  

    axios.defaults.headers.common["Authorization"] =
    "Bearer " + (user ? user.jwt_token : "")
  axios.defaults.headers.post["Content-Type"] = "application/json"




  return (
    <div className="App">

      <AppNav user={user} setUser={setUser} />
      <AppRoutes user={user} setUser={setUser} />
    </div>
  );
}

export default App;
