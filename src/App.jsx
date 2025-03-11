import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

function App() {

  const [page, setPage] = useState("signin")
  const [loginStatus, setLoginStatus] = useState(false)

  const toggleToSignIn = () => {
      console.log("Switching to Sign In");
      setPage("signin");
  };

  const toggleToSignUp = () => {
      console.log("Switching to Sign Up");
      setPage("signup");
  };

  const toggleToReset = () => {
    console.log("Switching to Reset");
    setPage("reset");
  };

  const toggleLoginStatus = () => {
    console.log('clicked')
    setLoginStatus(!loginStatus);
  };

    return (
      // <BrowserRouter basename={process.env.PUBLIC_URL}>
      <BrowserRouter>
        <Navbar toggleToSignIn={toggleToSignIn} toggleToSignUp={toggleToSignUp} loginStatus={loginStatus} />
        <Routes>
          {
            loginStatus ? 
            <Route path="/" element={<Home />} />
            :
            <Route path="/" element={<SignIn page={page} toggleToSignIn={toggleToSignIn} toggleToSignUp={toggleToSignUp} toggleToReset={toggleToReset} toggleLoginStatus={toggleLoginStatus}/>} />
          }
        </Routes>
      </BrowserRouter>
    );
}

export default App;
