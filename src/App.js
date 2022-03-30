import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home"
import Joke from "./components/Pages/Joke"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/" element={<Joke/>} />
        </Routes>
        </Router>

        <Home></Home>
        <div></div>
        <Joke></Joke>

    </>
  );
}

export default App;
