import "../../App.css";
import React, { useState } from "react";
import DbService from "../../DB/services";

function Food() {
  const [mealOfTheDay, setMealOfTheDay] = useState("");
  const [recipename, setRecipeName] = useState("");
  const [recipeImg, setRecipeImg] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");

  function upload() {
    const newItem = {
      name: recipename,
      link: link,
      img: "recipeImages/" + recipeImg.name,
      category: category,
    };
    DbService.addImage(recipeImg);
    DbService.addRecipe(newItem);
  }

  const setImage = async (event) => {
    const file = event.target.files[0];
    setRecipeImg(file);
  };

  return (
    <>
      <div className="content">
        <div className="foodContainer">
          <div>
            <span>
              <p className="color">Recipe Name</p>
              <input
                onChange={(e) => {
                  setRecipeName(e.target.value);
                }}
                type="text"
              />
            </span>
            <p>Upload Image</p>
            <input
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={setImage}
            />
            <span>
              <p className="color">Link</p>
              <input
                onChange={(e) => {
                  setLink(e.target.value);
                }}
                type="text"
              />
            </span>
            <img
              src={recipeImg === "" ? null : URL.createObjectURL(recipeImg)}
              alt="item"
              className="recipeImg"
            />

            <p>Kategori:</p>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="">Vælg...</option>
              <option value="Forret">Forret</option>
              <option value="Hovedret">Hovedret</option>
              <option value="Dessert">Dessert</option>
            </select>
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
      </div>
    </>
  );
}

export default Food;
