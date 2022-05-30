import "../../App.css";
import React, { useState, useEffect } from "react";
import DbService from "../../DB/services";
import { Link } from "react-router-dom";
import $ from "jquery";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";

function Food() {
  let results = [];
  const [mealOfTheDay, setMealOfTheDay] = useState("");
  const [recipes, setRecipes] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const [openRecipes, setOpenRecipes] = useState(false);
  const [openRecipesText, setOpenRecipesText] = useState("Show all recipes");

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

  return (
    <>
      <div className="content">
        <div className="foodContainer">
          <div className="Header">
            <h1>What's for dinner?</h1>
          </div>
          <div className="imgDiv">
            <h2>{mealOfTheDay.name}</h2>
            <a href={mealOfTheDay === "" ? "" : mealOfTheDay.link}>
              <img
                className={mealOfTheDay === "" ? "invisible" : "foodImg"}
                alt="item"
                src={imgUrl === "" ? null : imgUrl}
              />
            </a>
          </div>
          <Button
            sx={{
              width: "10%",
              justifySelf: "center",
            }}
            variant="contained"
            onClick={() => {
              randomRecipe();
            }}
          >
            Click here
          </Button>
        </div>
        <Button
          sx={{
            position: "absolute",
          }}
          variant="outlined"
          className="showAll"
          onClick={() => {
            setOpenRecipes(!openRecipes);
            if (!openRecipes) {
              setOpenRecipesText("Hide all recipes");
            } else {
              setOpenRecipesText("Show all recipes");
            }
          }}
        >
          {openRecipesText}
        </Button>
        <div className={openRecipes ? "editWindow" : "notVisible"}>
          <div className="listOfRecipes">
            <h2>List of recipes</h2>
            <List>
              {recipes?.map((value, index) => {
                return (
                  <a key={index} href={value.link}>
                    <ListItem>
                      <ListItemButton>{value.name}</ListItemButton>
                    </ListItem>
                    <Divider />
                  </a>
                );
              })}
            </List>
          </div>
        </div>
        <Link to="/signIn">
          <Button
            sx={{
              position: "absolute",
            }}
            variant="outlined"
            className="addLinkButton"
          >
            Add recipe
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Food;
