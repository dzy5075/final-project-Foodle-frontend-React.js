import React from 'react'
import {useNavigate,} from 'react-router-dom'

export default function Recipe({singleRecipe}) {
    let navigate = useNavigate()
    // console.log(singleRecipe)
  return (
    <>
        <div>
            <button 
            onClick={(e) => {
                navigate('/recipespage')}} > Return to Search</button>
            <h3>{singleRecipe.name}</h3>
            <button>Add to favorites</button>
        </div>

        <figure className="single-recipe">
            <img src={singleRecipe.image} alt=""></img>
        </figure>

        <table id="ingredients">
            <th>Ingredient</th>
                {singleRecipe.ingredients.map((ingredient) => {
                    return (
                        <tr>
                        <td>{ingredient.name}</td>
                        <th>Quantity:</th>
                        <td>{ingredient.quantity}</td>
                        </tr>
                    )
                })}

            {/* {singleRecipe.map((recipe) => {
                return(
                    <tr>
                    <td>{recipe.name}</td>
                    <td>{recipe.quantity}</td>
                    </tr>
                )
            })} */}
        </table>
             <div id="instructions"><h4>Cooking Instructions:</h4><p>{singleRecipe.instruction}</p></div>
    </>
  )
}
