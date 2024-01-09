import React from "react";

const Recipe = ({ recipe }) => {
  return (
    <div className="container">
      <div className="header">
        <img src={recipe.picture.file.url} alt="img"></img>
        <h1>{recipe.title}</h1>
      </div>
      <div className="info">
        <p>Servings: {recipe.servings}</p>
        <p>Time: {recipe.time} hours</p>
        <p>Difficulty: {recipe.difficulty}</p>
        <p>Calories: {recipe.calories}</p>
      </div>
      <div className="description">
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
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
