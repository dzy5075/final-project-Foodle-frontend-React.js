import React from 'react'
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";

export default function RecipesPage({fetchSingleRecipe}) {
let navigate = useNavigate();

const [recipes, setRecipes] = useState([]);

const fetchRecipe = async() => {
    let req = await fetch('/recipes')
    let res   = await req.json()        
    setRecipes(res)
} 

useEffect(() =>{
    fetchRecipe()
},[])

return(
    <>
     {recipes.map((recipe) =>{ 
         return(

                 <figure className = 'recipe' key = {recipe.id} id = {recipe.id}>
                     <img className ="thumbnail-img" src={recipe.image}  
                        onClick={(e) => {
                            console.log(recipe.id)
                            fetchSingleRecipe(recipe.id)
                            navigate('/recipe')
                     }
                     }alt=""></img>
                     <figcaption>{recipe.name}</figcaption>
                     {/* <button className= "buttons" onClick={() => }>Recipe Info</button> */}
                 </figure>
                 )
     })}


     </>
 )
}
