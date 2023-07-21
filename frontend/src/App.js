import React from "react";
import SignupPage from "./SignupPage/SignupPage";
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";
import {Route , Routes} from 'react-router-dom'
import MainPage from "./MainPage/MainPage";
import CreateTask from "./CreateTask/CreateTask";

function App() {
  return (
    <Routes>
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/signuppage" element={<SignupPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/createtask" element={<CreateTask />} />
    </Routes>
  );
}

export default App;
