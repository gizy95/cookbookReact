import useContentful from "./useContentful";
import { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import Loader from "./Loader";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [currentRecipeGroup, setCurrentRecipeGroup] = useState("all");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getRecipes } = useContentful();

  useEffect(() => {
    setLoading(true);
    getRecipes().then((response) => {
      setRecipes(response);
      setFilteredRecipes(response);
      setLoading(false); // Set loading to false after fetching data
    });
  }, []);

  useEffect(() => {
    if (currentRecipeGroup !== "all") {
      const filter = recipes.filter((recipe) => {
        return recipe.course === currentRecipeGroup;
      });
      setFilteredRecipes(filter);
    }
  }, [currentRecipeGroup]);

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
      <Navbar
        setCurrentRecipeGroup={setCurrentRecipeGroup}
        setCurrentRecipeIndex={setCurrentRecipeIndex}
      />
      {loading ? (
        <Loader /> // Show Loader when fetching data
      ) : (
        recipes.length > 0 && (
          <div>
            {currentRecipeGroup !== "all" && (
              <Recipe
                recipe={filteredRecipes[currentRecipeIndex]}
                key={currentRecipeIndex}
              />
            )}
            {currentRecipeGroup === "all" && (
              <Recipe
                recipe={recipes[currentRecipeIndex]}
                key={currentRecipeIndex}
              />
            )}
            <button onClick={goToPreviousRecipe}>Previous</button>
            <button onClick={goToNextRecipe}>Next</button>
          </div>
        )
      )}
    </>
  );
}

export default App;
