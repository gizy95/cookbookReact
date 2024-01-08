import React from 'react'
import one from './one.jpg'
const Recipe = ({recipe}) => {
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
                        {recipe.ingredients.map( ingredient => (
                            <li>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="steps">
                    <h2>Steps</h2>
                    <ul>
                        <li>Step 1</li>
                        <li>Step 2</li>
                        <li>Step 3</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Recipe	