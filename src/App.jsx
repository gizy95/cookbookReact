
import "./App.css";
import Navbar from "./elements/Navbar";
import Home from "./views/Home";
import { Routes, Route } from "react-router";
import Recipes from "./views/Recipes";
import Recipe from "./views/Recipe";
import Footer from "./components/Footer";

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
