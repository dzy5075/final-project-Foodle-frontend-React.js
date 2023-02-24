import React from 'react'

export default function Recipe({singleRecipe}) {

  return (
    <>
    <div>
        <h3>{singleRecipe.name}</h3>
    </div>
    <figure className="single-recipe">
        <img src={singleRecipe.image} alt=""></img>
    </figure>
        <table id="ingredients">
            <tr>
                <th>Ingredients</th>
                {singleRecipe.}
                <th>Quantity</th>
            </tr>

            {/* {singleRecipe.map((recipe) => {
                return(
                    <tr>
                    <td>{recipe.name}</td>
                    <td>{recipe.quantity}</td>
                    </tr>
                )
            })} */}
        </table>
        
            <div id="instructions"><h4>Cooking Instructions:</h4><br/><p>{singleRecipe.instruction}</p></div>
    </>
  )
}
