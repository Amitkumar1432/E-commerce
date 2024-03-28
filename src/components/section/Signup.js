import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
import firebase from "./FirebaseConfig";

export default function CreateAccount() {
  // Corrected function name from CreatAccount to CreateAccount
  const [name, setName] = useState(""); // State for user name
  const [email, setEmail] = useState(""); // State for email
  const [pass, setPass] = useState(""); // State for password
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    // Renamed Submit to handleSubmit
    e.preventDefault();
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass);
      if (userCredential.user) {
        alert("Account Created Successfully");
        navigate("/Login"); // Redirect to login page
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <div>
            <h2>Sign up Here!</h2> {/* Corrected typo in the heading */}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="User Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              Already Have an Account?
              <Link to="/Login">Login Now</Link>
            </p>

            <button className="custom-button" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
