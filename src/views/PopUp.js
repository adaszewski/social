import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import './PopUp.css';


const PopUp = (props) => {


    return (
        <container className="pop-up"  >
            <div className="close">
                <div className="close-box">
                <button className="btn-close" onClick={props.closeClick} > X </button>
            </div>
            <LoginForm user={props.user} setUser={props.setUser} onClick={props.closeClick} setShowPopUp={props.setShowPopUp} showPopUp={props.showPopUp} />

            {<Link to="/signup" showPopUp={props.showPopUp}> <button className="link-signup"> Jeśli nie masz konta zarejestruj się</button> </Link>}
        </div>





        </container >
    )
}

export default PopUp;
