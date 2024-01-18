import useContentful from "../utils/useContentful";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "../App.css";
import Recipe from "../components/Recipe";
import Loader from "../components/Loader";
import { useParams } from "react-router";
import useSingleentry from "../utils/useSingleentry";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const { course } = useParams()
    const { getRecipes } = useContentful(course);

    //FETCHING ONLY 1 RECIPE
    const entry = useSingleentry('4pjcfGbyaywSgPo00hElEf');
    console.log(entry)

    useEffect(() => {
        setCurrentRecipeIndex(0);
        setLoading(true);
        getRecipes().then((response) => {
            setRecipes(response);
            setLoading(false); // Set loading to false after fetching data
        });
    }, [course]);

    const [springProps, setSpringProps] = useSpring(() => ({
        opacity: 1,
        transform: "translateX(0px)",
    }));


    const goToNextRecipe = () => {
        setSpringProps({
            opacity: 0,
            transform: "translateX(100px)",
            onRest: () => {
                setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
                setSpringProps({
                    opacity: 1,
                    transform: "translateX(0px)",
                });
            },
        });
    };

    const goToPreviousRecipe = () => {
        setSpringProps({
            opacity: 0,
            transform: "translateX(-100px)",
            onRest: () => {
                setCurrentRecipeIndex((prevIndex) => (prevIndex - 1 + recipes.length) % recipes.length);
                setSpringProps({
                    opacity: 1,
                    transform: "translateX(0px)",
                });
            }
        });
    };


    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                recipes.length > 0 && (
                    <animated.div style={springProps}>
                        <Recipe
                            recipe={recipes[currentRecipeIndex]}
                            key={currentRecipeIndex}
                            goToNextRecipe={goToNextRecipe}
                            goToPreviousRecipe={goToPreviousRecipe}
                        />
                    </animated.div>
                )
            )}
        </>
    );
}

export default Recipes;