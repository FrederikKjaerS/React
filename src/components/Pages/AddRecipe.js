import "../../App.css";
import React, { useState, useEffect } from "react";
import DbService from "../../DB/services";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";

function AddRecipe() {
  const [recipename, setRecipeName] = useState("");
  const [recipeImg, setRecipeImg] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");

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
            <Select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <MenuItem value="Forret">Forret</MenuItem>
              <MenuItem value="Hovedret">Hovedret</MenuItem>
              <MenuItem value="Dessert">Dessert</MenuItem>
            </Select>
            <Button
              onClick={() => {
                upload();
              }}
            >
              Add
            </Button>
            <Link to="/Food">
              <Button className="addLinkButton">Go back</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddRecipe;
