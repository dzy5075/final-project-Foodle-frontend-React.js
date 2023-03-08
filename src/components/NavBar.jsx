import { useNavigate } from "react-router-dom";

function NavBar({loggedInUser}) {
  let navigate = useNavigate();
  return (
    <nav>
      <div className="banner">
        <div className="nav-bar"> 
          <img
            className="nav-logo"
            onClick={() => {
              navigate("/");
            }}
            src="/Foodle-Logo.png"
            alt="Foodle Logo"
            href="/"
          />
          <button
        className= "home-nav-btn"
        onClick={() => {
          navigate(`/recipespage`);
        }}
      >
        Look for more recipes
      </button>
          {loggedInUser ? <button
            className= "home-nav-btn"
            onClick={() => {
              navigate("/Favorites");
            }}
          >
            My Favorites
          </button>: null }
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
