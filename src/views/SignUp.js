import React from 'react';
import { useState } from 'react';
import { Navigate, Link } from "react-router-dom";
import axios from "axios";


const SignUp = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const [errors, serErrors] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [signUpMessage, setSignUpMessage] = useState("");
  const [signUpDone, setSignUpDone] = useState(false);

  const handleInputChange = (e) => {
    const target = e.target
    const name = target.name
    // console.log(target.value);

    setFormData({
      ...formData,
      [name]: target.value
    })
  }


  const validate = () => {

    let validError = {
      username: false,
      email: false,
      password: false,
      repeatPassword: false,
    };

    if (formData.username.trim().length < 4) {
      validError.username = true;
      serErrors((prevErrors) => {
        return {
          ...prevErrors,
          username: "Nazwa użytkownika powinna zawierać minimum 4 znaki",
        };
      });
    } else if (!/^[^\s]*$/.test(formData.username.trim())) {
      validError.username = true;
      serErrors((prevErrors) => {
        return {
          ...prevErrors,
          username: "Pole nie może być puste",
        };
      });
    } else {
      validError.username = false;
      serErrors((prevErrors) => {
        return { ...prevErrors, username: "" };
      });
    }


    if (!/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(formData.email.trim())
    ) {
      validError.email = true;
      serErrors((prevErrors) => {
        return {
          ...prevErrors,
          email: "To nie jest prawidłowy adres e-mail",
        };
      });
    }
    // else if (!/^[^\s]*$/.test(formData.email.trim())) {
    //   validError.email = true;
    //   serErrors((prevErrors) => {
    //     return {
    //       ...prevErrors,
    //       username: "Pole nie może być puste",
    //     };
    //   });
    // } 
    else {
      validError.email = false;
      serErrors((prevErrors) => {
        return { ...prevErrors, email: "" };
      });
    }


    if (formData.password.trim().length < 6) {
      validError.password = true;
      serErrors((prevErrors) => {
        return {
          ...prevErrors,
          password: "Minimalna długość hasła to 6 znaków",
        };
      });
    } else if (!/^[^\s]*$/.test(formData.password.trim())) {
      validError.password = true;
      serErrors((prevErrors) => {
        return {
          ...prevErrors,
          password: "Pole nie może być puste",
        };
      });
    } else if (
      !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(formData.password.trim())
    ) {
      validError.password = true;
      serErrors((prevErrors) => {
        return {
          ...prevErrors,
          password: "Hasło musi zawierać jeden ze znaków specjalnych: ! # @ $ %",
        };
      });
    } else {
      validError.password = false;
      serErrors((prevErrors) => {
        return { ...prevErrors, password: "" };
      });
    }

    if (formData.password.trim() !== formData.repeatPassword.trim()) {
      validError.repeatPassword = true;
      serErrors((prevErrors) => {
        return {
          ...prevErrors,
          repeatPassword: "Hasła muszą być takie same",
        };
      });
    } else {
      validError.repeatPassword = false;
      serErrors((prevErrors) => {
        return { ...prevErrors, repeatPassword: "" };
      });
    }
    console.log(validate)
    return (
      !validError.username &&
      !validError.email &&
      !validError.password &&
      !validError.repeatPassword
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    let newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    }
    console.log(newUser)

    let axiosConfig = {
      "headers": {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
      }
    };

    axios.post(
      'http://akademia108.pl/api/social-app/user/signup',
      JSON.stringify(newUser),
      axiosConfig
    )
      .then((req) => {
        let reqData = req.data;
        console.log(reqData)
        if (reqData.signedup) {
          setSignUpMessage(`Konto użytkownika ${formData.username} zostało zarejestrowane`);
          setSignUpDone(true);
          setFormData({
            username: '',
            email: '',
            password: '',
            repeatPassword: ''
          })
        } else {
          setSignUpMessage("Coś poszło nie tak");
        }
      })
      .catch((error) => {
        console.error(error);
      });

  };


  return (
    <div>

      {props.user && <Navigate to="/" />}
      <form onSubmit={handleSubmit}>
        <h2> Formularz rejestracji nowego użytkownika</h2><br></br>
        {signUpMessage && <h2>{signUpMessage}</h2>}

        <input value={formData.username} onChange={handleInputChange} disabled={signUpDone} type="text" name="username" placeholder="Nazwa użytkownika (min. 4 znaki)" /><label> nazwa użytkownika</label><br></br>
        {errors.username && <p>{errors.username}</p>}

        <input value={formData.email}  onChange={handleInputChange} disabled={signUpDone} type="text" name="email" placeholder="Adres e-mail" /><label> adres e-mail</label><br></br>
        {errors.email && <p>{errors.email}</p>}

        <input value={formData.password} onChange={handleInputChange} disabled={signUpDone} type="password" name="password" placeholder="Hasło (min. 6 znaków)" /><label> hasło</label><br></br>
        {errors.password && <p>{errors.password}</p>}

        <input value={formData.repeatPassword} onChange={handleInputChange} disabled={signUpDone} type="password" name="repeatPassword" placeholder="Powtórz hasło" /><label> powtórz hasło</label><br></br>
        {errors.repeatPassword && <p>{errors.repeatPassword}</p>}
        <button input type="submit" disabled={signUpDone} > Zarejestruj się </button>
        {signUpDone && (
          <div>
            {<Link to="/login">Przejdź do logowania</Link>}
          </div>)}
      </form>
    </div>
  )
}

export default SignUp;