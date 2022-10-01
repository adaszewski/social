import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './LoginForm.css'

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const [loginMessage, setLoginMessage] = useState("");

  const handleInputChange = (e) => {

    const target = e.target
    const name = target.name

    setFormData({
      ...formData,
      [name]: target.value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    let user = {
      username: formData.username,
      password: formData.password,
    }

    // console.log(newUser)

    let axiosConfig = {
      "headers": {
        "Content-Type": 'application/json',
        "Accept": 'application/json',

      }
    };

    axios
      .post(
        "http://akademia108.pl/api/social-app/user/login",
        JSON.stringify(user),
        axiosConfig
      )
      .then((req) => {
        let reqData = req.data;
        console.log(reqData);
        if (Array.isArray(reqData.username)) {
          setLoginMessage("Pole nazwa użytkownika jest wymagane");
        } else if (Array.isArray(reqData.password)) {
          setLoginMessage("Pole hasło jest wymagane");
        } else if (reqData.error) {
          setLoginMessage("Nieprawidłowa nazwa użytkownika lub hasło");
        } else {
          setLoginMessage("");
          props.setUser(reqData);
          localStorage.setItem("user", JSON.stringify(reqData));

        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2> Formularz logowania </h2>
      {props.user && <Navigate to="/" />}

      <input onChange={handleInputChange} name="username" /><label> nazwa użytkownika</label><br></br>
      <input onChange={handleInputChange} type="passowrd" name="password" /><label> hasło</label><br></br>
      <button> Zaloguj się </button>
      {loginMessage && <h2>{loginMessage}</h2>}
     
    </form>

  );
}


export default LoginForm;