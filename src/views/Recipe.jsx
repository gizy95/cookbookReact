import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useContentful from "../utils/useContentful";
import Loader from "../components/Loader";


const Recipe = () => {

  const [recipe, setRecipe] = useState([]);
  const { getRecipe } = useContentful();
  const { id } = useParams();

  const fetchRecipe = async (id) => {
    const response = await getRecipe(id);
    try {

      setRecipe(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRecipe(id);
  }, [id])




  if (!recipe || Object.keys(recipe).length === 0) {
    return <Loader />; // or any loading indicator
  }

  return (
    <div className="container">
      <div className="header">
        <img src={recipe.picture.file.url} alt="img"></img>
        <h1>{recipe.title}</h1>
      </div>
      <div className="info">
        <div className="info-container">
          <span className="material-symbols-outlined">
            dining
          </span>
          <p><span className="info-title">Servings</span> <br /> {recipe.servings}</p>
        </div>
        <div className="info-container">
          <span className="material-symbols-outlined">
            schedule
          </span>
          <p><span className="info-title">Time</span><br /> {recipe.time} hours</p>
        </div>
        <div>
          <span className="material-symbols-outlined">
            skillet
          </span>
          <p><span className="info-title">Difficulty</span><br /> {recipe.difficulty}</p>
        </div>
        <div>
          <span className="material-symbols-outlined">
            local_fire_department
          </span>
          <p><span className="info-title">Calories</span><br /> {recipe.calories}</p>
        </div>
      </div>
      <div className="description">
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="steps">
          <h2>Steps</h2>
          {recipe.steps.split("\n").map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;