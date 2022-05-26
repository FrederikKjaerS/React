import "../../App.css";
import React, { useState, useEffect } from "react";
import DbService from "../../DB/services";
import { Link } from "react-router-dom";

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
            <Link to="/addRecipe">
              <button>Add recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
