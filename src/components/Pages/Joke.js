import "../../App.css";
import React, { useReducer, useState } from "react";
import Button from '@mui/material/Button';
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
        setInsult(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const sub = ()=> {
    console.log("hej");

  }

  return (
    <>
      <h1>Hello, {insult}!</h1>
      <Button color="secondary" onClick={newInsult} variant="contained">INSULT</Button>

    </>
  );
}

export default Joke;
