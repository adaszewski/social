import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './AppNav.css'

const AppNav = (props) => {

    const logout = (e) => {
        e.preventDefault();

        axios
            .post(
                "http://akademia108.pl/api/social-app/user/logout")

            .then((req) => {
                console.log(req.data)
                if (req.data.message) {
                    props.setUser(null);
                    localStorage.setItem("user", null);
                }
            })
            .catch((error) => {
                props.setUser(null);
                localStorage.setItem("use", null);
                console.log(error)
            })
    }


    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/" > Home </Link>
                </li>
                {!props.user && <li>
                    <Link to="/login" > Zaloguj się </Link>
                </li>}
                {!props.user && <li>
                    <Link to="/signup" > Zarejestruj się  </Link>
                </li>}
                {props.user && <li>
                    <Link to="/" onClick={logout}> Wyloguj się </Link>
                </li>}
                {/* {props.user && <li>
                    <Link to="/newpost">  Dodaj post </Link>
                </li>} */}
                {props.user && <li>
                    Jesteś zalogowany jako:<span>{props.user.username}</span> 
                </li>}
            </ul>
        </nav>
    )
}

export default AppNav