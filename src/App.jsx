import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar"
import NewUser from "./components/NewUser";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import RecipesPage from "./components/RecipesPage";
import Recipe from "./components/Recipe";


function App() {

  //global states that sibiling compnenets may need to access
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [clickedBar, setClickedBar] = useState()
  const [singleRecipe, setSingleRecipe] = useState([])

  
  // useEffect for auto-login
  
  // useEffect(() => {
    //   fetch("/me")
    //   .then((r) => {
      //     if (r.ok) {
        //       r.json().then((user) => setLoggedInUser(user));
        //     }
        //   });
        // },[]);
        
        // if(!setLoggedInUser)  return <LoginPage setLoggedInUser={setLoggedInUser} />
        
        function fetchSingleRecipe(id) {
            
            fetch(`/recipes/${id}`)
            .then(res => res.json())
            .then(res => setSingleRecipe(res))
          }
          console.log(singleRecipe)

  //all the routes
  const router = createBrowserRouter([
    {
      path: "*",
      element: 
      <div><h1>404 NOT FOUND</h1></div>
    },{
      path:"/",
      element: 
      <>
      <Home/>
      </>
    },{
      path: "/newuser",
      element: 
      <>
      <NavBar/>
      <NewUser/>
      </>
    },{
      path: "/login",
      element: 
      <>
      <NavBar/>
      <LoginPage/>
      </>
    },{
      path: "/recipespage",
      element: 
      <>
      <div id= "recipe-page">
      <NavBar/>
      <RecipesPage fetchSingleRecipe={fetchSingleRecipe} singleRecipe={singleRecipe}/>
      </div>
      </>
    },
    ,{
      path: `/recipe`,
      element: 
      <>
      <NavBar/>
      <Recipe fetchSingleRecipe={fetchSingleRecipe} singleRecipe={singleRecipe}/>
      </>
    }
  ])
  return (


    <div >
      <RouterProvider router={router}/>      
    </div>
  )
}

export default App

