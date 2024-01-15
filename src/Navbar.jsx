const Navbar = ({ setCurrentRecipeGroup, setCurrentRecipeIndex }) => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li className="home">Cookbook Home</li>
          <li>Salads</li>
          <li>Main Dishes</li>
          <li>Desserts</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
