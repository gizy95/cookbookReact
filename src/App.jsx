
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { Routes, Route } from "react-router";
import Recipes from "./Recipes";

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="salads" element={<Recipes />} />
        <Route path="main" element={<div>Main</div>} />
        <Route path="desert" element={<div>Desert</div>} />
      </Routes>
    </>
  );
}

export default App;
