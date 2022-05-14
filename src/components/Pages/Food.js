import "../../App.css";
import React, { useState } from "react";
<<<<<<< HEAD
import DbService from "../../DB/services";
=======
import DbService from "../../services";
>>>>>>> a339f4ea31fd07afd190b42522ecfe04d31714fe

function Food() {
  const [newFood, setNewFood] = useState("");
  const [mealOfTheDay, setMealOfTheDay] = useState("");

<<<<<<< HEAD
  function upload() {
    const newItem = {
      name: "hej",
    };
    DbService.addRecipe(newItem);
  }

=======
  async function hej() {
    try {
      await DbService.writeUserData("hej");
      console.log("Done");
    } catch (err) {
      console.log(err);
    }
  }
>>>>>>> a339f4ea31fd07afd190b42522ecfe04d31714fe
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
<<<<<<< HEAD
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
=======
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
>>>>>>> a339f4ea31fd07afd190b42522ecfe04d31714fe
      </div>
    </>
  );
}

export default Food;
