import useContentful from "../utils/useContentful";
import { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";


const Recipes = () => {

    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { getRecipes } = useContentful();

    useEffect(() => {
        setLoading(true);
        getRecipes().then((response) => {
            setRecipes(response);
            setLoading(false); // Set loading to false after fetching data
        });
    }, []);


    const handleCardClick = (id) => {
        navigate(`/recipes/${id}`);
    };



    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                recipes.length > 0 && (
                    <div>

                        {recipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                onClick={() => handleCardClick(recipe.id)}

                            >
                                <img style={{ "width": 50, height: 50 }} src={recipe.picture.file.url} alt={recipe.title} />
                                <p>{recipe.title}</p>
                            </div>

                        ))}
                    </div>
                )
            )}
        </>
    );
}

export default Recipes;
