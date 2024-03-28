import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "./FirebaseConfig";
import "../css/Sign.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, pass);
      if (user) {
        alert("Login Successfully");
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSkip = () => {
    navigate("/");
  };

  return (
    <div className="main">
      <div className="container">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Id"
              name="email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input-box"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="form-group">
            <p>
              Don't have an account? <Link to="/signup">Create Account</Link>
            </p>
            <button className="custom-button" onClick={handleSubmit}>
              Sign In
            </button>
            <button className="skip-button" onClick={handleSkip}>
              Skip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
