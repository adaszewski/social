import React from 'react';
import { useForm } from 'react-hook-form';
import { axios } from "axios";


const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  let newUser = {
    username: "username",
    email: "email",
    password: "password",
  }

   const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  }

  axios.post(
          'http://akademia108.pl/api/social-app/user/signup', 
          JSON.stringify(newUser),
          { 'headers': headers })
      .then((req) => {

          // your code :)      

          console.log(req.data);  
      }).catch((error) => {
          console.error(error);
      })



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2> Formularz rejestracji nowego użytkownika</h2>
      <input type="text" placeholder="Nazwa użytkownika (min. 4 znaki)" {...register("username", { required: true, max: 14, min: 4, maxLength: 100 })} /><label> nazwa użytkownika</label><br></br>
      <input type="email" placeholder="Adres e-mail" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} /><label> adres e-mail</label><br></br>
      <input type="password" placeholder="Hasło (min. 8 znaków)" {...register("password", { required: true, max: 12, min: 8, maxLength: 12 })} /><label> hasło</label><br></br>
      <input type="password" placeholder="Powtórz hasło" {...register("password2", { required: true, max: 12, min: 8, maxLength: 12 })} /><label> powtórz hasło</label><br></br>

      <button input type="submit"> Zarejestruj się </button>
    </form>
  );
}


export default SignUp;