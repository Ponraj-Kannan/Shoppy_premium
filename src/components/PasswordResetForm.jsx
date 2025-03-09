import './Styles.css';
import React, { useState } from "react";

const PasswordResetForm = ({toggleToSignIn}) => {
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <>
        <div className="password-reset-header">
            <h3 className="password-reset-title">Reset Your Password</h3>
            <p className="password-reset-instruction">
                Enter your email and we'll send you a link to reset your password.
            </p>
        </div>

        <form onSubmit={handleSubmit} className="password-reset-form">
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

            <button className="password-reset-button">Send</button>
            <p className="signin-prompt">
                Back to <a href="#" className="signup-link" onClick={toggleToSignIn}>Login</a>
            </p>
        </form>
        </>
    )
}

export default PasswordResetForm