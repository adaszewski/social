import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';
import axios from 'axios';



const App = (props) => {

  const [user, setUser] = useState((JSON.parse(localStorage.getItem('user'))))
  const [showPopUp, setShowPopUp] = useState(false)

  axios.defaults.headers.common["Authorization"] =
    "Bearer " + (user ? user.jwt_token : "")
  axios.defaults.headers.post["Content-Type"] = "application/json"

  useEffect(() => {
    const popUpStatusChange = () => {
      setShowPopUp(true)
    }

    const timeId = setTimeout(() => {
      popUpStatusChange()
    }, 5000);

    return () => {
      clearTimeout(timeId);
    }
  }, []

  );

  const closeClick = (props) => {
    setShowPopUp(false)
  }

  return (
    <div className="App">

      <AppNav user={user} setUser={setUser} />
      <AppRoutes showPopUp={showPopUp} user={user} setUser={setUser} closeClick={closeClick} />


    </div>
  );
}

export default App;
