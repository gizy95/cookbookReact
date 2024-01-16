import useContentful from "./useContentful";
import { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Loader from "./Loader";
import { useParams } from "react-router";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const {course} = useParams()
    const { getRecipes } = useContentful(course);

    useEffect(() => {
        setLoading(true);
        getRecipes().then((response) => {
            setRecipes(response);
            setLoading(false); // Set loading to false after fetching data
        });
    }, [course]);

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
            {loading ? (
                <Loader /> // Show Loader when fetching data
            ) : (
                recipes.length > 0 && (
                    <div>
                        <Recipe
                            recipe={recipes[currentRecipeIndex]}
                            key={currentRecipeIndex}
                            goToNextRecipe={goToNextRecipe}
                            goToPreviousRecipe={goToPreviousRecipe}
                        />
                    </div>
                )
            )}
        </>
    );
}

export default Recipes;
