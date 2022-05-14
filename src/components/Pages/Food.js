import "../../App.css";
import React, { useState } from "react";
import DbService from "../../DB/services";

function Food() {
  const [newFood, setNewFood] = useState("");
  const [mealOfTheDay, setMealOfTheDay] = useState("");

  function upload() {
    const newItem = {
      name: "hej",
    };
    DbService.addRecipe(newItem);
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
          <button
            onClick={() => {
              upload();
            }}
          >
            Add
          </button>
        </div>
        <div>
          <p>What's for dinner?</p>
          <button>Click here</button>
        </div>
      </div>
    </>
  );
}

export default Food;
