import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import heartIcon from "../assets/navbar/Component 1.svg";
import userIcon from "../assets/navbar/Component 2.svg";
import cartIcon from "../assets/navbar/Component 3.svg";


const Navbar = ({ toggleToSignIn, toggleToSignUp, loginStatus }) => {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        toggleToSignUp();
        // navigate("/signup");
    };

    const handleLoginClick = () => {
        toggleToSignIn();
        // navigate("/signin");
    };

    useEffect(() => {
        console.log(loginStatus);
    }, [loginStatus]); // This will log only when loginStatus changes

    return (
        <nav className="navbar">
            <div className="navbar-brand">Shoppy</div>
            {
                !loginStatus ? 
                <div className="navbar-signin">
                    <p className="navbar-language">English (United States)</p>
                    <button className="btn-login" onClick={handleLoginClick}>Sign In</button>
                    <button className="btn-signup" onClick={handleSignUpClick}>Sign Up</button>
                </div> 
                : 
                <div className="navbar-menu-container">
                    <div className="navbar-menu">
                        <a href="#" className="navbar-menu-item">Shop</a>
                        <a href="#" className="navbar-menu-item">Men</a>
                        <a href="#" className="navbar-menu-item">Women</a>
                        <a href="#" className="navbar-menu-item">Kids</a>
                    </div>
                    <div className="navbar-actions">
                        <input type="text" className="navbar-search" placeholder="Search" />
                        <img src={heartIcon} alt="Favorites" />
                        <img src={userIcon} alt="User Profile" />
                        <img src={cartIcon} alt="Shopping Cart" />
                    </div>
                </div>
            }
        </nav>
    );
};

export default Navbar;