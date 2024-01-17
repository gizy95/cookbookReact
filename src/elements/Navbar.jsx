import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/salad" className="nav-link">Salads</NavLink>
      <NavLink to="/main" className="nav-link">Main</NavLink>
      <NavLink to="/dessert" className="nav-link">Dessert</NavLink>
    </nav>
  );
};

export default Navbar;
