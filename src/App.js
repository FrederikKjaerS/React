import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home"
import Joke from "./components/Pages/Joke"
import Food from "./components/Pages/Food"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/joke" element={<Joke/>} />
          <Route path="/food" element={<Food/>} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
