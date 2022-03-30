import '../../App.css'
import React, { useState } from "react";




 

function Joke() {
  const [insult, setInsult] = useState("");

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://insult.mattbas.org/api/insult',

};

axios.request(options).then(function (response) {
	console.log(response.data);
  setInsult(response.data);
}).catch(function (error) {
	console.error(error);
});
  return (
    <>
    <h1>Hello, {insult}!</h1>
     
    </>
  );
}

export default Joke;
