import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";

function App() {
    const [page, setPage] = useState("signin");

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

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <BrowserRouter> */}
        <Navbar toggleToSignIn={toggleToSignIn} toggleToSignUp={toggleToSignUp} />
        <Routes>
            <Route path="/login" element={<SignIn page={page} toggleToSignIn={toggleToSignIn} toggleToSignUp={toggleToSignUp} toggleToReset={toggleToReset}/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
