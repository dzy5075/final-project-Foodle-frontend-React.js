import { useEffect, useState } from "react";
import { useNavigate, Form, Navigate } from "react-router-dom";

export default function Nutrition() {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([])

  function fetchNutrition(query) {
    const url = `https://api.api-ninjas.com/v1/nutrition?query=${query}`;
    fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": "mP+Bcu+RiGJbJ/DnYDfdRg==v0kHqhomppC2Nmag",
      },
    })
      .then((res) => res.json())
      .then((data) => setSearchData(data));
  }

  useEffect(() => {
    fetchNutrition(query);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNutrition(query);
  };

  return (
    <div className="bar">
      {/* <input
        className="searchbar"
        type="text"
        name="search"
        placeholder="Search Food"
      /> */}
      <Form method="get">
        <div className="bar">
          <input
            className="searchbar"
            type="text"
            name="search"
            placeholder="Search food for nutrition data"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="home-search-btn" type="submit" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </Form>
      <div>
        {searchData.map((nutrientdata) => {
        return (
        <figure>
            <h1>Food Name: {nutrientdata.name}</h1>
            <ul>
                <p>Servings: {nutrientdata.serving_size_g}g</p>
                <p>Calories: {nutrientdata.calories}kcals</p>
                <p>Total Fat: {nutrientdata.fat_total_g}g</p>
                <p>Saturated Fat: {nutrientdata.fat_saturated_g}g</p>
                <p>Protein: {nutrientdata.protein_g}g</p>
                <p>Sodium: {nutrientdata.sodium_mg}mg</p>
                <p>Potassium: {nutrientdata.potassium_mg}mg</p>
                <p>Cholesterol: {nutrientdata.cholesterol_mg}mg</p>
                <p>Carbohydrates: {nutrientdata.carbohydrates_total_g}g</p>
                <p>Fiber: {nutrientdata.fiber_g}g</p>
                <p>Sugars: {nutrientdata.sugar_g}g</p>
            </ul>
        </figure>
        )
        })}
      </div>
    </div>
  );
}
