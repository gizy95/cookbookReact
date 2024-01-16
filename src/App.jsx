
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
        <Route path="/:course" element={<Recipes />} />
      </Routes>
    </>
  );
}

export default App;
