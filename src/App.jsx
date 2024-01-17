
import "./App.css";
import Navbar from "./elements/Navbar";
import Home from "./views/Home";
import { Routes, Route } from "react-router";
import Recipes from "./views/Recipes";

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:course" element={<Recipes />} />
      </Routes>
    </>
  );
}

export default App;
