import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "./Search";

export default function RecipesPage({ fetchSingleRecipe, loggedInUser, addFavorite }) {
//   let navigate = useNavigate(); 

  // const [search, setSearch] = useState("")
  const [recipes, setRecipes] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  let [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  
  const fetchRecipe = async () => {
    let req = await fetch("/recipes");
    let res = await req.json();
    setRecipes(res);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  
const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  });

  const categoryFilteredRecipes = filteredRecipes.filter((recipe) => {
    if (categoryFilter === "All") return true;

    return recipe.category === categoryFilter;
  });

  return (
    <div className="recipe-page">
      <Search
        search={search}
        setSearch={(value) => {
          searchParams.set("search", value);
          setSearchParams(searchParams);
        }}
        setCategoryFilter={setCategoryFilter}
      />
      <div className="display-recipes">
        {categoryFilteredRecipes.map((recipe) => {
          return (
            <DisplayRecipes
              fetchSingleRecipe={fetchSingleRecipe}
              key={recipe.id}
              recipe={recipe}
              loggedInUser={loggedInUser}
              addFavorite={addFavorite}
            />
          );
        })}
      </div>
    </div>
  );
}

function DisplayRecipes({ fetchSingleRecipe, recipe, loggedInUser, addFavorite}) {
  let navigate = useNavigate();

  return (
    <figure className="recipe" key={recipe.id} id={recipe.id}>
      <img
        className="thumbnail-img"
        src={recipe.image}
        onClick={(e) => {
          console.log(recipe.id);
          fetchSingleRecipe(recipe.id);
          navigate("/recipe");
        }}
        alt=""
      ></img>
      <figcaption>{recipe.name}</figcaption>
      <button className= "buttons" onClick={() =>addFavorite(loggedInUser, recipe) }>Add to Favorites</button>
    </figure>
  );
}
