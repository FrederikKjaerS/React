import "../../App.css";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import React from "react";

function Tombola() {
  const [jcer, setJcer] = useState("");

  const jcArray = [
    "Kramer",
    "Jake",
    "Mause",
    "Kjær",
    "Birk",
    "Minger",
    "Lusse",
    "Bigum",
    "Hastrup",
    "Thomsi",
    "Stello",
    "Juns",
    "Ju",
    "Lille",
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function roll() {
    let person = jcArray[getRandomInt(jcArray.length)];
    setJcer(person);
  }

  return (
    <>
      <div className="tombolaContainer">
        <h1>Træk en JC'er</h1>
        <h2 className={jcer === "" ? "invisible" : ""}>{jcer}</h2>
        <Button
          sx={{
            width: "10%",
            justifySelf: "center",
          }}
          variant="contained"
          onClick={() => {
            roll();
          }}
        >
          TRYK
        </Button>
      </div>
    </>
  );
}

export default Tombola;
