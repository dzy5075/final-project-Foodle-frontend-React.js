import React from 'react'
import {useNavigate,} from 'react-router-dom'

export default function Recipe({singleRecipe, addFavorite, loggedInUser}) {
    let navigate = useNavigate()
    // console.log(singleRecipe)
  return (
    <>
        <div>
            <button 
            onClick={(e) => {
                navigate('/recipespage')}} > Return to Search</button>
            <h3>{singleRecipe.name}</h3>
            <button className="favorite-btn" onClick={() => addFavorite(loggedInUser, singleRecipe)}>Add to favorites</button>
        </div>

        <figure className="single-recipe">
            <img src={singleRecipe.image} alt=""></img>
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
                    )
                })}

        </table>
             <div id="instructions"><h4>Cooking Instructions:</h4><p>{singleRecipe.instruction}</p></div>
    </>
  )
}
