import "../../App.css";
import React, { useState, useEffect } from "react";
import DbService from "../../DB/services";

function Food() {
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

  useEffect(() => {
    getRecipes();
  }, []);

  async function getRecipes() {
    await DbService.getAllRecipes().then((result) => (results = result));
    setRecipes(results);
  }

  useEffect(() => {
    DbService.downloadImage(mealOfTheDay["img"])
      .then((result) => {
        setImgUrl(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [mealOfTheDay]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function randomRecipe() {
    let meal = recipes[getRandomInt(recipes.length)];
    setMealOfTheDay(meal);
  }
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
      await getRecipes();
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
              value={recipeImg}
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
              className="recipeImg"
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
          </div>
          <div>
            <div className="mealOfTheDay">
              <p>What's for dinner?</p>
              <button
                onClick={() => {
                  randomRecipe();
                }}
              >
                Click here
              </button>
              <h2>{mealOfTheDay.name}</h2>
              <a href={mealOfTheDay === "" ? "" : mealOfTheDay.link}>
                <img
                  className="foodImg"
                  alt="item"
                  src={imgUrl === "" ? null : imgUrl}
                />
              </a>
            </div>
            <button
              className="showAll"
              onClick={() => {
                setOpenRecipes(!openRecipes);
              }}
            >
              Show All Recipes
            </button>
            <div className={openRecipes ? "editWindow" : "notVisible"}>
              <div className="listOfRecipes">
                {recipes?.map((value, index) => {
                  return (
                    <a key={index} href={value.link}>
                      <p>{value.name}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
