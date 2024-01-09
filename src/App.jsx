import useContentful from "./useContentful";
import { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Navbar from "./Navbar";

function App() {


  const [recipes, setRecipes] = useState([])
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0)
  const { getRecipes } = useContentful();

  useEffect(() => {
    getRecipes().then((response) => setRecipes(response))
  }, [])

  const goToNextRecipe = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length)
  }

  const goToPreviousRecipe = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex - 1 + recipes.length) % recipes.length)
  }

  return (
    <>
      <Navbar />
      {recipes.length > 0 && (
        <div>
          <Recipe recipe={recipes[currentRecipeIndex]} key={currentRecipeIndex} />
          <button onClick={goToPreviousRecipe}>Previous</button>
          <button onClick={goToNextRecipe}>Next</button>
        </div>
      )}

    </>
  );
}

export default App;
