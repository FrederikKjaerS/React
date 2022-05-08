import "../../App.css";
import React, {useState} from "react";

function Food() {
  const [newFood, setNewFood] = useState("");
  const [mealOfTheDay, setMealOfTheDay] = useState("");
  return (
    <>
    <div className="foodContainer">
      <div>
        <input type="text" className="add" onChange={(e) => {
                setNewFood(e.target.value);
              }}/>
        <button>Add</button>
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
