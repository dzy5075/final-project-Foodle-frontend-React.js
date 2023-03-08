import { useNavigate } from "react-router-dom";

function HomeNavBar({ setLoggedInUser, loggedInUser }) {
  let navigate = useNavigate();

  function logOut() {
    // setLoggedInUser(undefined)
    // navigate('/')
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        navigate("/");
        setLoggedInUser(null);
      }
    });
  }
  {
    console.log(loggedInUser);
  }
  return (
    <nav>
      <div className="banner">
        <div className="nav-bar">
        <strong>{loggedInUser ? (`Hi ${loggedInUser.name}!`
          ) : (
            <button
              class="home-nav-btn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login/Signup
            </button>
          )}</strong>
          <div id="function-btns">
          <button
            class="home-nav-btn"
            onClick={() => {
              navigate("/Foodtrition");
            }}
          >
            <strong>Search Foodtrition</strong>
          </button>
          <button
            class="home-nav-btn"
            onClick={() => {
              navigate("/Tools");
            }}
          >
            <strong>Calculate Needs</strong>
          </button>
          <button
            class="home-nav-btn"
            onClick={() => {
              navigate("/Favorites");
            }}
          >
            <strong>View Favorite Recipes</strong>
          </button>
          {/* <button onClick={() => {
                            navigate('/login')}} 
                            >Login/Signup</button> */}
          {loggedInUser ? (
            <button
              class="home-nav-btn"
              type="button"
              onClick={loggedInUser ? logOut : () => navigate("/")}
            ><strong>
              {" "}
              logout</strong>
            </button>
          ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavBar;
