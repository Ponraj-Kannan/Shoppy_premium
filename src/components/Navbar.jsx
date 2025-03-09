import "./Styles.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({toggleToSignIn, toggleToSignUp}) => {
    const navigate = useNavigate();
    
    const handleSignUpClick = () => {
        toggleToSignUp
        // navigate("/signup");
    };

    const handleLoginClick = () => {
        toggleToSignIn
        // navigate("/signin");
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Shoppy</div>
            <div className="nav-actions">
                <p className="nav-language">English (United States)</p>
                <button className="btn-login" onClick={toggleToSignIn}>Sign In</button>
                <button className="btn-signup" onClick={toggleToSignUp}>Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;

