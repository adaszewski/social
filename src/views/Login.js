import React from 'react';
import { useForm } from 'react-hook-form';
import { axios } from "axios";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    let userLogon = {
        username: "username",
        password: "password",
    }


    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2> Logowanie do portalu</h2>
            <input type="text" placeholder="nazwa użytkownika (min. 4 znaki)" {...register("username", { required: true, max: 14, min: 4, maxLength: 100 })} /><label> nazwa użytkownika</label><br></br>
            <input type="password" placeholder="hasło" {...register("password", { required: true, max: 12, min: 8, maxLength: 12 })} /><label> hasło</label><br></br>
            <button input type="submit"> Zaloguj się </button>
        </form>
    );
}


export default Login;

