import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Favorites({ loggedInUser }) {
  const navigate = useNavigate();

  const [favoriteRecipe, setFavoriteRecipe] = useState([]);

  function fetchFavoriteRecipe() {
    fetch(`/favorite_recipes`)
      .then((res) => res.json())
      .then((res) => setFavoriteRecipe(res));
  }
  // console.log(favoriteRecipe)

  useEffect(() => {
    fetchFavoriteRecipe();
  }, []);

  function deleteFavorite(favorite) {
    fetch(`/favorite_recipes/${favorite.id}`, {
      method: `DELETE`,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => navigate(`/recipespage`))
      .then(() => {
        handleDeleteFavorite(favoriteRecipe);
        console.log("Deleted!");
      });
  }

  // function handleDeleteClick() {
  //   fetch(`http://localhost:3001/toys/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((r) => r.json())
  //     .then(() => {
  //       onDeleteToy(toy);
  //     });
  // }

  // function handleDeleteToy(toyToDelete) {
  //   const updatedToys = toys.filter((toy) => toy.id !== toyToDelete.id);
  //   setToys(updatedToys);
  // }

  function handleDeleteFavorite(favToDelete) {
    const updatedFavs = userFavorites.filter(
      (favorite) => favorite.id !== favToDelete.id
    );
    console.log(updatedFavs);
    setFavoriteRecipe(updatedFavs);
  }

  const userFavorites = favoriteRecipe.filter((recipe) => {
    return loggedInUser.id === recipe.user_id;
  });

  return (
    <div className="favorites-container">
      <button
        onClick={() => {
          navigate(`/recipespage`);
        }}
      >
        Look for recipes
      </button>
      <h1>My Favorite Recipes</h1>
      <div className="display-recipes">
        {userFavorites.map((favorite) => {
          return (
            <figure className="recipe" key={favorite.id} id={favorite.id}>
              <img
                className="thumbnail-img"
                src={favorite.recipe.image}
                onClick={(e) => {
                  console.log(favorite.recipe.id);
                  fetchFavoriteRecipe(favorite.id);
                  navigate("/recipe");
                }}
                alt=""
              ></img>
              <figcaption>{favorite.recipe.name}</figcaption>
              <button
                // onClick = {() => console.log(favorite.id)}
                className="delete-btn"
                onClick={loggedInUser ? () => deleteFavorite(favorite) : null}
                // onClick={loggedInUser ? logOut : () => navigate("/")}
              >
                Unfavorite
              </button>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
