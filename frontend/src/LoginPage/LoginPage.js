import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import '../SignupPage/SignupPage.css'

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();  //prevemts the automatic submission
    console.log(email, password);
    fetch("http://localhost:5000/loginuser", {     //fetch makes post request to retrieve email and password
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    // checks if "ok" is recieved from the backend then provides access to the task manager
    //useNavigate link to the homepage
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          navigate("/homepage");
          Swal.fire({
            icon: "success",
            text: "You have succesfully logged in",
          });
        }else{
          Swal.fire({
            icon: "error",
            text: "Sign up",
          });
        }
      });
  };

  return (
    <>
    <div className="formpage">
      <div className="form">
        <form className="form-container" onSubmit={handleSubmit}>
          <span className="title">Log in</span>
          <div className="form-group">
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="input"
              placeholder="Password"
              autoComplete="on"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
          <div className="form-section">
          <p >
            Don't have an account? <Link to="/signuppage">Sign Up</Link>
          </p>
        </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;