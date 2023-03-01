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

  function deleteFavorite (id) {
    fetch (`/favorite_recipes/${id}`, {
      method: `DELETE`
    }).then ((res) => {
      if (res.ok) {
          navigate('/Favorites')
      }
        })
      .then (() =>console.log("deleted!"))
  }

  const userFavorites = favoriteRecipe.filter((recipe) => {
    return loggedInUser.id === recipe.user_id;
  });
  console.log(userFavorites);
  return (
    <div className="favorites-container">
      <h1>My Favorite Recipes</h1>
      <div className="display-recipes">
        {userFavorites.map((favorite) => {
          return (
            <figure className="recipe" key={favorite.id} id={favorite.id}>
              {console.log(favorite.id)}
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
              <button className="delete-btn" onClick={loggedInUser ? deleteFavorite : () => navigate('/Favorites')} >Delete</button>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
