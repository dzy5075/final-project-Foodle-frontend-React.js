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
          {loggedInUser ? (
            `Hi ${loggedInUser.name} !`
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login/Signup
            </button>
          )}
          <button
              onClick={() => {
                navigate("/Favorites");
              }}
            >
              View Favorite Recipes
            </button>
          {/* <button onClick={() => {
                            navigate('/login')}} 
                            >Login/Signup</button> */}
          {loggedInUser ? (
            <button
              type="button"
              onClick={loggedInUser ? logOut : () => navigate("/")}
            >
              {" "}
              logout
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default HomeNavBar;
