import "./Styles.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import backgroundImage from "../assets/bert-b-rhNff6hB41s-unsplash 1.png"; // Update the path
import googleIcon from "../assets/icons8-google-48.png"; // Update the path
import PasswordResetForm from "./PasswordResetForm";

const SignIn = ({page, toggleToSignIn, toggleToSignUp, toggleToReset, toggleLoginStatus}) => {

    return (
        <div className="signin-container">
            <img src={backgroundImage} alt="Background" className="signin-background-image" />
            <div className="signin-form-container">
                {page === "reset" ? 
                    <PasswordResetForm toggleToSignIn={toggleToSignIn}/> : 
                    <>
                        <div className="signin-header">
                            <h3 className="signin-title">{page === "signin" ? "Sign In" : "Sign Up"}</h3>
                            <button className="google-signin-button" onClick={toggleLoginStatus}>
                                <img src={googleIcon} alt="Google Icon" className="google-icon" />
                                Continue with Google
                            </button>
                        </div>

                        <div className="separator-container">
                            <hr className="horizontal-line" />
                            <span className="divider-text">or</span>
                            <hr className="horizontal-line" />
                        </div>

                        {/* Conditional Rendering for SignInForm or SignUpForm */}
                        {page === "signin" ? <SignInForm  toggleToSignUp={toggleToSignUp} toggleToReset={toggleToReset}/> : <SignUpForm toggleToSignIn={toggleToSignIn}/>}
                    </>
                }
            </div>
        </div>
    );
};

export default SignIn;
