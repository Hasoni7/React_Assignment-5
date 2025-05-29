import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./styles/global.css";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/game" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
