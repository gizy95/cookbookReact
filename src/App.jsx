import useContentful from "./useContentful";
import { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import Loader from "./Loader";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { getRecipes } = useContentful();

  useEffect(() => {
    setLoading(true);
    getRecipes().then((response) => {
      setRecipes(response);
      setLoading(false); // Set loading to false after fetching data
    });
  }, []);

  const goToNextRecipe = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
  };

  const goToPreviousRecipe = () => {
    setCurrentRecipeIndex(
      (prevIndex) => (prevIndex - 1 + recipes.length) % recipes.length
    );
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader /> // Show Loader when fetching data
      ) : (
        recipes.length > 0 && (
          <div>
            <Recipe
              recipe={recipes[currentRecipeIndex]}
              key={currentRecipeIndex}
            />
            <div className="buttons">
              <button onClick={goToPreviousRecipe}>Previous</button>
              <button onClick={goToNextRecipe}>Next</button>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default App;
