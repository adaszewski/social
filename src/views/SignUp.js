import React from 'react';
import { useState } from 'react';
// import { useForm } from 'react-hook-form';
import { axios } from "axios";


const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const handleInputChange = (e) => {
    const target = e.target
    const name = target.name
    console.log(target.value);
    
    setFormData({
      ...formData,
      [name]: target.value
    })
  }


  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);
  // console.log(errors);

  // let newUser = {
  //   username: "username",
  //   email: "email",
  //   password: "password",
  // }

  //  const headers = {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  // }

  // axios.post(
  //         'http://akademia108.pl/api/social-app/user/signup', 
  //         JSON.stringify(newUser),
  //         { 'headers': headers })
  //     .then((req) => {

  //         // your code :)      

  //         console.log(req.data);  
  //     }).catch((error) => {
  //         console.error(error);
  //     })



  return (
    <form >
      <h2> Formularz rejestracji nowego użytkownika</h2>
      <input onChange={handleInputChange} type="text" name="username" placeholder="Nazwa użytkownika (min. 4 znaki)" /><label> nazwa użytkownika</label><br></br>
      <input onChange={handleInputChange} type="email" name="email" placeholder="Adres e-mail" /><label> adres e-mail</label><br></br>
      <input onChange={handleInputChange} type="password" name="password" placeholder="Hasło (min. 8 znaków)" /><label> hasło</label><br></br>
      <input onChange={handleInputChange} type="password" name="repeatPassword" placeholder="Powtórz hasło" /><label> powtórz hasło</label><br></br>
      <button input type="submit"> Zarejestruj się </button>

    </form>
  );
}


export default SignUp;