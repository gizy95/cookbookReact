import useContentful from './useContentful'
import { useState, useEffect } from 'react'
import './App.css'
import Recipe from './Recipe'

function App() {

  const [recipes, setRecipes] = useState([])
  const { getRecipes } = useContentful();

  useEffect(() => {
    getRecipes().then((response) => setRecipes(response));

  });



  return (
    <>
    {recipes.map( (recipe,index) => (

      <Recipe recipe={recipe} key={index}/>
    ))}
    </>
  )
}

export default App
