import React from "react";
import { Link } from "react-router-dom";
import './MainPage.css'

const MainPage = () => {
  return (
    <div className="mainpage">
       <h1 className="header">Effortless Task Management</h1>
       <h2 className="header2">Achieve More, Stress Less!</h2>
       <div className="mainpage-btn">
      <Link to="/loginpage">
        <button className="form-submit-btn">Login</button>
      </Link>
      <Link to="/signuppage">
        <button className="form-submit-btn">Sign UP</button>
      </Link>
      </div>
    </div>
  );
};


export default MainPage;