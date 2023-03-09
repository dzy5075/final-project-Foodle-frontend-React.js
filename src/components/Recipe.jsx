import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default function Recipe({ singleRecipe, addFavorite, loggedInUser }) {
  let navigate = useNavigate();
  // console.log(singleRecipe)

  return (
    <div id="entire-recipe-container">
      <div class="recipe-header">
        <h1>{singleRecipe.name}</h1>
        <div id="recipe-btn">
        <button
          className="fav-delete-btn"
          onClick={(e) => {
            navigate("/recipespage");
          }}
        >
          {" "}
          Return to Search
        </button>
        <button
          className="fav-delete-btn"
          onClick={() => addFavorite(loggedInUser, singleRecipe)}
        >
          Add to favorites
        </button>
        </div>
      </div>

        {/* <div className="single-recipe"> */}
          <figure className="single-recipe">
          <img src={singleRecipe.image} alt="recipe img" ></img>
          </figure>
            <table id="ingredients">
                <th>Ingredients</th>
                {console.log(singleRecipe.ingredients)}
                {singleRecipe.ingredients.map((ingredient) => {
                return (
                    <tbody>
                    <td>{ingredient.name}</td>
                    {/* <th>Quantity:</th> */}
                    <td>{ingredient.quantity}</td>
                    </tbody>
                );
                })}
            </table>
      {console.log(`${singleRecipe.video}`)}
        {/* </div> */}
      <div id="instructions">
        <h1>Cooking Instructions:</h1>
        <p>{singleRecipe.instruction}</p>
      </div>
      {/* <div className="ratio ratio-16x9">
  <iframe src={singleRecipe.video} title="YouTube video" allowfullscreen></iframe>
</div> */}
    </div>
  );
}
  

