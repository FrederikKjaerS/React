import "../../App.css";
import React, { useState } from "react";
import DbService from "../../services";

function Food() {
  const [newFood, setNewFood] = useState("");
  const [mealOfTheDay, setMealOfTheDay] = useState("");

  async function hej() {
    try {
      await DbService.writeUserData("hej");
      console.log("Done");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="foodContainer">
        <div>
          <input
            type="text"
            className="add"
            onChange={(e) => {
              setNewFood(e.target.value);
            }}
          />
          <button>Add</button>
        </div>
        <div>
          <p>What's for dinner?</p>
          <button
            onClick={() => {
              hej();
            }}
          >
            Click here
          </button>
        </div>
      </div>
    </>
  );
}

export default Food;
