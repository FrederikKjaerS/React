import "../../App.css";
import React, { useState } from "react";
import "./Joke.css";

function Joke() {
  const [insult, setInsult] = useState("");

  const axios = require("axios");

  function newInsult(){
    const options = {
      method: "GET",
      url: "https://insult.mattbas.org/api/insult",
    };
  
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setInsult(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <>
      <h1>Hello, {insult}!</h1>
      <button className="btn" onClick={newInsult}>INSULT</button>
    </>
  );
}

export default Joke;
