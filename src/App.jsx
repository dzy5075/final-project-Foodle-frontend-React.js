import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import NewUser from "./components/NewUser";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import RecipesPage from "./components/RecipesPage";
import Recipe from "./components/Recipe";
import Favorites from "./components/Favorites";
import HomeNav from "./components/HomeNav";

function App() {
  //global states that sibiling components may need to access
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [singleRecipe, setSingleRecipe] = useState([]);

  // useEffect for auto-login and login persistence
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setLoggedInUser(user));
      }
    });
  }, []);

  if (!setLoggedInUser) return <LoginPage setLoggedInUser={setLoggedInUser} />;

  //fetch single recipes for individual pages
  function fetchSingleRecipe(id) {
    fetch(`/recipes/${id}`)
      .then((res) => res.json())
      .then((res) => setSingleRecipe(res));
  }
  console.log(singleRecipe);
  // post to favorites

  function addFavorite(loggedInUser, singleRecipe, recipe) {
    // show ids
    console.log("User_id: " + loggedInUser.id);
    console.log("Recipe_id:" + singleRecipe.id);

    const FavData = {
      user_id: loggedInUser.id,
      recipe_id: singleRecipe.id || recipe.id,
    };
    fetch("/favorite_recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FavData),
    })
      .then((res) => res.json())
      .then(console.log("added to favorites"));
  }
  
  //all the routes
  const router = createBrowserRouter([
    {
      path: "*",
      element: (
        <div>
          <h1>404 NOT FOUND</h1>
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <HomeNav
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
          <Home singleRecipe={singleRecipe} />
        </>
      ),
    },
    {
      path: "/newuser",
      element: (
        <>
          <NavBar loggedInUser={loggedInUser} />
          <NewUser
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavBar loggedInUser={loggedInUser} />
          <LoginPage
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        </>
      ),
    },
    {
      path: "/recipespage",
      element: (
        <>
          <div id="recipe-page">
            <NavBar loggedInUser={loggedInUser} />
            <RecipesPage
              fetchSingleRecipe={fetchSingleRecipe}
              singleRecipe={singleRecipe}
              loggedInUser={loggedInUser}
              addFavorite={addFavorite}
            />
          </div>
        </>
      ),
    },
    ,
    {
      path: `/recipe`,
      element: (
        <>
          <NavBar loggedInUser={loggedInUser} />
          <Recipe
            fetchSingleRecipe={fetchSingleRecipe}
            singleRecipe={singleRecipe}
            addFavorite={addFavorite}
            loggedInUser={loggedInUser}
          />
        </>
      ),
    },
    {
      path: "/Favorites",
      element: (
        <>
          <NavBar loggedInUser={loggedInUser} />
          <Favorites
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
            singleRecipe={singleRecipe}
          />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
