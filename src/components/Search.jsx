import React from 'react'

export default function Search({search, setSearch, setCategoryFilter}) {

    return (
        <div className= "search-filter" >
                        <select name="filter" className= "categoryfilter" onChange={(e) => setCategoryFilter(e.target.value)}>
                            <option value="All">Filter by Category</option>
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
                        <input className="searchbar" 
                                type="text" 
                                title="Search"  
                                value = {search} 
                                onChange = {(e) => {setSearch(e.target.value)}}
                                placeholder="Search Recipe by Name"/>
                    </div>
    )
}
