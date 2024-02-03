import { useNavigate } from "react-router";

const NavButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="buttons">
        <button onClick={handleClick}>Back to Recipes</button>
      </div>
    </>
  );
};

export default NavButton;
