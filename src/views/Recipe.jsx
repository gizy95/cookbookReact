import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import endpoints from "../utils/recipesAPI";
import NavButton from "../components/NavButton";


const Recipe = () => {


  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const { getRecipe } = endpoints();

  const fetchRecipe = async (id) => {
    try {

      const response = await getRecipe(id);
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
    return <Loader />;
  }

  const ingredientsArray = recipe.ingredients.split(', ');
  return (
    <div className="container">
      <div className="header">
        <img src={recipe.picture} alt="img"></img>
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
          <p><span className="info-title">Time</span><br /> {recipe.time} minutes</p>
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
            {ingredientsArray.map((ingredient, index) => (
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
      <NavButton />
    </div>
  );
};

export default Recipe;
