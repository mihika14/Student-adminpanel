import React from "react";
import HomePage from "./HomePage/HomePage";
import {Route , Routes} from 'react-router-dom'
import MainPage from "./MainPage/MainPage";
import CreateStudent from "./CreateStudent/CreateStudent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/createstudent" element={<CreateStudent />} />
    </Routes>
  );
}

export default App;
