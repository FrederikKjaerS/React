import React from "react";
import Navbar from "./components/NavBar";
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
          <Route path="/" exact component={Home} />
        </Routes>
        </Router>

        <Home></Home>
        <div></div>
        <Joke></Joke>

    </>
  );
}

export default App;
