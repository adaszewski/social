import React from "react"

import LoginForm from "../components/LoginForm";
import './PopUp.css'


const PopUp = (props) => {
    return (
        <div className="pop-up">

            <LoginForm user={props.user} setUser={props.setUser}/>

        </div>
    )
}

export default PopUp;
