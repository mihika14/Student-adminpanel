import React , {useState} from "react";
import { Link } from "react-router-dom";
import './MainPage.css'
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from '../SignupPage/SignupPage';

const MainPage = () => {
  const [isLoginVisible, setLoginVisible] = useState(true);

  const toggleForm = () => {
    setLoginVisible(!isLoginVisible);
  };

  return (
    <div className="mainpage">
      <div className="mainpageheading">
       <h1 className="header">Admin Panel </h1>
       <span className="description" >It provides essential tools for managing and maintaining data in a School , allowing administrators to handle Student data efficiently and securely.</span>
       </div>
       <div className="mainpagebtn">
          <button className={isLoginVisible ? "active" : ""} onClick={toggleForm}>
            Login
          </button>
          <button className={!isLoginVisible ? "active" : ""} onClick={toggleForm}>
            Signup
          </button>
        </div>
        <div className="form-container1">
        {isLoginVisible ? <LoginPage /> : <SignupPage />}
        </div>
    </div>
  );
};


export default MainPage;