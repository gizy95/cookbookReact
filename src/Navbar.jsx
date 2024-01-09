const Navbar = ({ setCurrentRecipeGroup, setCurrentRecipeIndex }) => {
  return (
    <>
      <div className="navbar">
        
        <ul>
        <li className="home"
          onClick={() => {
            setCurrentRecipeGroup("all"), setCurrentRecipeIndex(0);
          }}
        >
          Cookbook Home
        </li>
          <li
            onClick={() => {
              setCurrentRecipeGroup("salad"), setCurrentRecipeIndex(0);
            }}
          >
            Salads
          </li>
          <li
            onClick={() => {
              setCurrentRecipeGroup("main"), setCurrentRecipeIndex(0);
            }}
          >
            Main Dishes
          </li>
          <li
            onClick={() => {
              setCurrentRecipeGroup("dessert"), setCurrentRecipeIndex(0);
            }}
          >
            Desserts
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
