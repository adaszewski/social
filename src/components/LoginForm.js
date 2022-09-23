import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
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
    let newUser = {
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
        JSON.stringify(newUser),
        { axiosConfig }
      )
      .then((req) => {
        let reqData = req.data;
        console.log(reqData);
        // if (Array.isArray(reqData.username)) {
        //   setLoginMessage(reqData.username[0]);
        // } else if (Array.isArray(reqData.password)) {
        //   setLoginMessage(reqData.password[0]);
        // } else if (reqData.error) {
        //   setLoginMessage("Nieprawidłowa nazwa użytkownika lub hasło");
        // } else {
        //   setLoginMessage("");
        //   localStorage.setItem("user", JSON.stringify(reqData));
        // }
      })
      // .catch((error) => {
      //   console.error(error);
      // });
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2> Formularz logowania </h2>

      <input onChange={handleInputChange} name="username" /><label> nazwa użytkownika</label><br></br>
      <input onChange={handleInputChange} name="password" /><label> hasło</label><br></br>
      <button> Zaloguj się </button>
      <h2>{loginMessage}</h2>
      <h3> logujesz sie jako <span>{formData.username} </span></h3>
    </form>

  );
}


export default LoginForm;