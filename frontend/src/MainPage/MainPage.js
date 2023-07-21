import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="mainpage">
       <h1 className="header" >TASK MANAGER</h1>
      <Link to="/loginpage">
        <button>Login</button>
      </Link>
      <Link to="/signuppage">
        <button>Sign UP</button>
      </Link>
    </div>
  );
};


export default MainPage;