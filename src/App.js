import React from "react";

import Navbar from "./components/NavBar";
import Home from "./components/Pages/Home";
import Joke from "./components/Pages/Joke";
import Food from "./components/Pages/Food";
import AddRecipe from "./components/Pages/AddRecipe";
import SignInPage from "./components/Pages/LogInPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joke" element={<Joke />} />
          <Route path="/food" element={<Food />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/signIn" element={<SignInPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
