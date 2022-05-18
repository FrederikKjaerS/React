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

  // use the request-promise library to fetch the HTML from pokemon.org

  useEffect(() => {
    async function getRecipes() {
      await DbService.getAllRecipes().then((result) => (results = result));
      setRecipes(results);
    }
    getRecipes();
  }, []);

  useEffect(() => {
    console.log(mealOfTheDay);
    DbService.downloadImage(mealOfTheDay["img"])
      .then((result) => {
        console.log(result);
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
            <div className="listOfRecipes">
              {recipes?.map((value, index) => {
                return (
                  <p>
                    {value.name} <a href={value.link}>Link</a>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
