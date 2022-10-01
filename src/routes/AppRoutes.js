import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import SignUp from "../views/SignUp";

const AppRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home user={props.user} setUser={props.setUser} showPopUp={props.showPopUp} closeClick={props.closeClick} />} />
            <Route path="login" element={<Login user={props.user} setUser={props.setUser} />} />
            <Route path="signup" element={<SignUp user={props.user} />} />
        </Routes>
    )
}
export default AppRoutes;