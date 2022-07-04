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
  const [openRecipesText, setOpenRecipesText] = useState("Vis alle");

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
            <h1>Hvad skal du have at spise?</h1>
          </div>
          <div className="imgContainer">
            <h2>{mealOfTheDay.name}</h2>
            <div className="imgDiv">
              <a href={mealOfTheDay === "" ? "" : mealOfTheDay.link}>
                <img
                  className={mealOfTheDay === "" ? "invisible" : "foodImg"}
                  alt="item"
                  src={imgUrl === "" ? null : imgUrl}
                />
              </a>
            </div>
          </div>
        </div>
        <Button
          sx={{
            width: "10%",
            justifySelf: "center",
            position: "absolute",
            bottom: "10%",
            left: "45%",
          }}
          variant="contained"
          onClick={() => {
            randomRecipe();
          }}
        >
          TRYK
        </Button>
        <Button
          sx={{
            position: "absolute",
          }}
          variant="outlined"
          className="showAll"
          onClick={() => {
            setOpenRecipes(!openRecipes);
            if (!openRecipes) {
              setOpenRecipesText("Skjul alle");
            } else {
              setOpenRecipesText("Vis alle");
            }
          }}
        >
          {openRecipesText}
        </Button>
        <div className={openRecipes ? "editWindow" : "notVisible"}>
          <div className="listOfRecipes">
            <h2>Liste over opskrifter</h2>
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
            Tilføj opskrift
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Food;
