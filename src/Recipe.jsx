import React from 'react'
import one from './one.jpg'
const Recipe = () => {
    return (
        <div className="container">
            <div className="header">
                <img src={one} alt="img"></img>
                <h1>Name Recipe</h1>
            </div>
            <div className="info">
                <p>Servings</p>
                <p>Time</p>
                <p>Difficulty</p>
                <p>Calories</p>
            </div>
            <div className="description">
                <div className="ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        <li>Ingredient 1</li>
                        <li>Ingredient 2</li>
                        <li>Ingredient 3</li>
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