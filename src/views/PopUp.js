import React from "react";
import LoginForm from "../components/LoginForm";
import './PopUp.css';


const PopUp = (props) => {


    return (
        <div className="pop-up"  >
            <span onClick={props.closeClick} > zamknij </span>
            <LoginForm user={props.user} setUser={props.setUser} onClick={props.closeClick} setShowPopUp={props.setShowPopUp} showPopUp={props.showPopUp} />

        </div>
    )
}

export default PopUp;
