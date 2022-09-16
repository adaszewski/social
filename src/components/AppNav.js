import { Link } from "react-router-dom";


const AppNav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/" > Home </Link>
                </li>
                <li>
                    <Link to="/login" > Login </Link>
                </li>
                <li>
                    <Link to="/signup" > Sign up  </Link>
                </li>
            </ul>
        </nav>
    )
}
export default AppNav; 