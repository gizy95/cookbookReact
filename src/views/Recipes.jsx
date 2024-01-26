import useContentful from "../utils/useContentful";
import { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import "../Recipe-card.css";

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
          <>
            <h2 className="course-title">Salads</h2>
            <div className="card-container">
              {recipes.map(
                (recipe) =>
                  recipe.course === "salad" && (
                    <div
                      className="recipe-card"
                      key={recipe.id}
                      onClick={() => handleCardClick(recipe.id)}
                    >
                      <img
                        className="recipe-img"
                        src={recipe.picture.file.url}
                        alt={recipe.title}
                      />
                      <p className="recipe-title">{recipe.title}</p>
                    </div>
                  )
              )}
            </div>
            <h2 className="course-title">Main Dishes</h2>
            <div className="card-container">
              {recipes.map(
                (recipe) =>
                  recipe.course === "main" && (
                    <div
                      className="recipe-card"
                      key={recipe.id}
                      onClick={() => handleCardClick(recipe.id)}
                    >
                      <img
                        className="recipe-img"
                        src={recipe.picture.file.url}
                        alt={recipe.title}
                      />
                      <p className="recipe-title">{recipe.title}</p>
                    </div>
                  )
              )}
            </div>
            <h2 className="course-title">Desserts</h2>
            <div className="card-container">
              {recipes.map(
                (recipe) =>
                  recipe.course === "dessert" && (
                    <div
                      className="recipe-card"
                      key={recipe.id}
                      onClick={() => handleCardClick(recipe.id)}
                    >
                      <img
                        className="recipe-img"
                        src={recipe.picture.file.url}
                        alt={recipe.title}
                      />
                      <p className="recipe-title">{recipe.title}</p>
                    </div>
                  )
              )}
            </div>
          </>
        )
      )}
    </>
  );
};

export default Recipes;
