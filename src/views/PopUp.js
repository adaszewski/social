import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import './PopUp.css';


const PopUp = (props) => {


    return (
        <div className="pop-up"  >
            <div className="close">
                <span onClick={props.closeClick} > zamknij </span>
            </div>
            <LoginForm user={props.user} setUser={props.setUser} onClick={props.closeClick} setShowPopUp={props.setShowPopUp} showPopUp={props.showPopUp} />
            <div>
                <div className="link-sigmup">
                    {<Link to="/signup" showPopUp={props.showPopUp}> Jeśli nie masz konto zarejestruj </Link>}
                </div>
            </div>

        </div>
    )
}

export default PopUp;
