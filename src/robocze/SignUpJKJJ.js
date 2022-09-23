import React from 'react';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
import { axios } from "axios";

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2> Formularz rejestracji nowego użytkownika</h2>
      <input type="text" placeholder="Nazwa użytkownika (min. 4 znaki)" {...register("username", { required: true, max: 14, min: 4, maxLength: 20 })} /><label> nazwa użytkownika</label><br></br>
      <input type="email" placeholder="Adres e-mail" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} /><label> adres e-mail</label><br></br>
      <input type="password" placeholder="Hasło (min. 8 znaków)" {...register("password", { required: true,  min: 6,  })} /><label> hasło</label><br></br>
      <input type="password" placeholder="Powtórz hasło" {...register("confirm_password", {
        required: true,
        validate: (val) => {
          if (watch('password') !== val) {
            return "Your passwords do no match";
          }
        },
      })}
      /><label> powtórz hasło</label><br></br>

      <button input type="submit"> Zarejestruj się </button>
    </form>
  );
}


export default SignUp;