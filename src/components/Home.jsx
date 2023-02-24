import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate()

    







    return (
        <div className='home-container'>
            <img className="logo" alt="Foodle" src="./Foodle-Logo.png"/>
            <div className="bar">
                <input className="searchbar" type="text" title="Search" placeholder="Search"/>
            </div>
                <div className= "filtersearch">
                    <div className= "homecontrols">
                        <select name="filter" className= "categoryfilter">
                            <option value="All">Filter by Diet</option>
                            <option>Favorites</option>
                            <option value="Beef">Beef</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Chicken">Chicken</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Goat">Goat</option>
                        </select>
                        <select name="filter" className= "allergyfilter">
                            <option value="All">Filter by Allergy</option>
                            <option>Favorites</option>
                            <option value="Beef">Beef</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Chicken">Chicken</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Goat">Goat</option>
                            <option value="Lamb">Lamb</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Pork">Pork</option>
                            <option value="Seafood">Seafood</option>
                            <option value="Side">Side</option>
                            <option value="Starter">Starter</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Vegetarian">Vegetarian</option>
                        </select>
                        <button id="home-search" onClick={() => {navigate('/recipespage')}} > Search</button>
                    </div>
                </div>
    </div>
  )
}
