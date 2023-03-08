import { useEffect, useState } from "react";
import { useNavigate, Form, Navigate } from "react-router-dom";
import { Container } from "semantic-ui-react";

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
    <div className="nutrition-bar">
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
      <div class="nutrition-container">
        {searchData.map((nutrientdata) => {
        return (
        <figure key={nutrientdata.id} >
            <h1>Food Name: <u>{nutrientdata.name}</u></h1>
            <ul>
                <p><strong>Servings:</strong> <u>{nutrientdata.serving_size_g}g</u></p>
                <p><strong>Calories:</strong> <u>{nutrientdata.calories}kcals</u></p>
                <p><strong>Total Fat:</strong> <u>{nutrientdata.fat_total_g}g</u></p>
                <p><strong>Saturated Fat:</strong> <u>{nutrientdata.fat_saturated_g}g</u></p>
                <p><strong>Protein:</strong> <u>{nutrientdata.protein_g}g</u></p>
                <p><strong>Sodium:</strong> <u>{nutrientdata.sodium_mg}mg</u></p>
                <p><strong>Potassium:</strong> <u>{nutrientdata.potassium_mg}mg</u></p>
                <p><strong>Cholesterol:</strong> <u>{nutrientdata.cholesterol_mg}mg</u></p>
                <p><strong>Carbohydrates:</strong> <u>{nutrientdata.carbohydrates_total_g}g</u></p>
                <p><strong>Fiber:</strong> <u>{nutrientdata.fiber_g}g</u></p>
                <p><strong>Sugars:</strong> <u>{nutrientdata.sugar_g}g</u></p>
            </ul>
        </figure>
        )
        })}
      </div>
      </Form>
    </div>
  );
}
