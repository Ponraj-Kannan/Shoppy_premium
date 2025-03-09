import './Styles.css';
import React, { useState } from "react";
import hideIcon from '../assets/icons8-hide-48.png';
import showIcon from '../assets/icons8-unhide-48.png';

const SignInForm = ({toggleToSignUp, toggleToReset}) => {
    const [user, setUser] = useState({
        userId: 0, // This would typically be auto-generated on the backend
        userName: "",
        userEmail: "",
        userPassword: "",
        gender: "",
        sizePreferences: [],
        favoriteBrands: [],
        phone: 0,
    });
    const [icon, setIcon] = useState(hideIcon);
    const [pass, setPass] = useState("password");
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
    };

    const unhide = () => {
        setIcon(showIcon); // Change icon on hover
        setPass("text")
    };

    const hide = () => {
        setIcon(hideIcon); // Change back on mouse leave
        setPass("password")
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="signin-form">
            <div>
                <label htmlFor="email" className="input-label">Email Address</label>
                <input 
                    id="email" 
                    type="email" 
                    className="input-field"
                    name="userEmail"
                    value={user.userEmail}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <div className="password-section">
                    <label htmlFor="password" className="input-label">Password</label>
                    <button className="toggle-password-visibility-button">
                        <img 
                            src={icon} 
                            alt="Toggle Icon" 
                            className="hide-icon" 
                            onMouseEnter={unhide} 
                            onMouseLeave={hide} 
                        />
                    </button>
                </div>

                <input 
                    id="password" 
                    type={pass}
                    className="input-field" 
                    name="userPassword"
                    value={user.userPassword}
                    onChange={handleInputChange}
                    required
                />
                <a href="#" className="forgot-password-link" onClick={toggleToReset}>Forgot your password?</a>
            </div>

            <button className="signin-button">Sign In</button>
            <p className="signup-prompt">
                Don’t have an account? <a href='#' className="signup-link" onClick={toggleToSignUp}>Sign up</a>
            </p>
        </form>
    )
}

export default SignInForm;