import "../../App.css";
import React, { useState, useEffect } from "react";
import DbService from "../../DB/services";
import { Link } from "react-router-dom";

function AddRecipe() {
  let results = [];
  const [mealOfTheDay, setMealOfTheDay] = useState("");
  const [recipename, setRecipeName] = useState("");
  const [recipeImg, setRecipeImg] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [recipes, setRecipes] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const [openRecipes, setOpenRecipes] = useState(false);

  // use the request-promise library to fetch the HTML from pokemon.org

  function resetStates() {
    setCategory("");
    setRecipeImg("");
    setRecipeName("");
    setLink("");
  }

  async function upload() {
    if (recipename === "" || recipeImg === "" || category === "") {
      alert("Please fill out everything");
    } else {
      const newItem = {
        name: recipename,
        link: link,
        img: "recipeImages/" + recipeImg.name,
        category: category,
      };
      DbService.addImage(recipeImg);
      DbService.addRecipe(newItem);
    }
    resetStates();
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
                value={recipename}
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
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
                type="text"
              />
            </span>
            <img
              src={recipeImg === "" ? null : URL.createObjectURL(recipeImg)}
              alt="item"
              className={recipeImg === "" ? "invisible" : "recipeImg"}
            />

            <p>Kategori:</p>
            <select
              value={category}
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
            <Link to="/Food">
              <button className="addLinkButton">Go back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddRecipe;
