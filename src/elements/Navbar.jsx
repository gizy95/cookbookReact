import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/recipes" className="nav-link">Recipes</NavLink>
    </nav>
  );
};

export default Navbar;
