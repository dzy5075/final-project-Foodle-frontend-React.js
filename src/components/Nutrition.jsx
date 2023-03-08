import { useEffect, useState } from "react";
import { useNavigate, Form, Navigate } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function Nutrition() {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

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
          <button
            className="home-search-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
        <div class="nutrition-container">
          {searchData.map((nutrientdata) => {
            return (
              // <img src="https://s.cdpn.io/3/NutritionFacts.gif" class="image">
              <section class="performance-facts">
                <header class="performance-facts__header">
                  <h1 class="performance-facts__title">Nutrition Facts</h1>
                  <p>Serving Size {nutrientdata.serving_size_g}g</p>
                </header>
                <table class="performance-facts__table">
                  <tbody>
                    <tr>
                      <th colspan="2">
                        <b>Total Calories: </b>
                        {nutrientdata.calories}kcals
                      </th>
                      <th colspan="2">
                        <b>{"Total Calories from Fat: "}</b>
                        <u>{Math.round(`${nutrientdata.fat_total_g}` * 9)} kcals </u>
                      </th>
                    </tr>
                    <tr class="thick-row">
                      <td colspan="3" >
                        <h2>% Daily Value*</h2>
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2">
                        <b>Total Fat: </b>
                        {nutrientdata.fat_total_g}g
                      </th>
                      <td>
                        <b>
                          {Math.round(
                            (`${nutrientdata.fat_total_g}` / 64) * 100
                          )}
                          %
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td class="blank-cell"></td>
                      <th>
                        Saturated Fat: 
                        {nutrientdata.fat_saturated_g}g
                      </th>
                      <td>
                        <b>
                          {Math.round(
                            (`${nutrientdata.fat_saturated_g}` / 20) * 100
                          )}
                          %
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2">
                        <b>Cholesterol: </b>
                        {nutrientdata.cholesterol_mg}mg
                      </th>
                      <td>
                        <b>
                          {Math.round(
                            (`${nutrientdata.cholesterol_mg}` / 300) * 100
                          )}
                          %
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2">
                        <b>Sodium: </b>
                        {nutrientdata.sodium_mg}mg
                      </th>
                      <td>
                        <b>
                          {Math.round(
                            (`${nutrientdata.sodium_mg}` / 2000) * 100
                          )}
                          %
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2">
                        <b>Total Carbohydrate: </b>
                        {nutrientdata.carbohydrates_total_g}g
                      </th>
                      <td>
                        <b>
                          {Math.round(
                            (`${nutrientdata.carbohydrates_total_g}` / 300) *
                              100
                          )}
                          %
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td class="blank-cell"></td>
                      <th>
                        Dietary Fiber: 
                        {nutrientdata.fiber_g}g
                      </th>
                      <td>
                        <b>
                          {Math.round((`${nutrientdata.fiber_g}` / 25) * 100)}%
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td class="blank-cell"></td>
                      <th>
                        Sugars:  
                        {nutrientdata.sugar_g}g
                      </th>
                      <td></td>
                    </tr>
                    <tr class="thick-end">
                      <th colspan="2">
                        <b>Protein: </b>
                        {nutrientdata.protein_g}g
                      </th>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </section>
            );
          })}
        </div>
      </Form>
    </div>
  );
}

// ----------------------Backup Table -------------------------------------
// <figure key={nutrientdata.id} >
//     <h1>Food Name: <u>{nutrientdata.name}</u></h1>
//     <ul>
//         <p><strong>Servings:</strong> <u>{nutrientdata.serving_size_g}g</u></p>
//         <p><strong>Calories:</strong> <u>{nutrientdata.calories}kcals</u></p>
//         <p><strong>Total Fat:</strong> <u>{nutrientdata.fat_total_g}g</u></p>
//         <p><strong>Saturated Fat:</strong> <u>{nutrientdata.fat_saturated_g}g</u></p>
//         <p><strong>Protein:</strong> <u>{nutrientdata.protein_g}g</u></p>
//         <p><strong>Sodium:</strong> <u>{nutrientdata.sodium_mg}mg</u></p>
//         <p><strong>Potassium:</strong> <u>{nutrientdata.potassium_mg}mg</u></p>
//         <p><strong>Cholesterol:</strong> <u>{nutrientdata.cholesterol_mg}mg</u></p>
//         <p><strong>Carbohydrates:</strong> <u>{nutrientdata.carbohydrates_total_g}g</u></p>
//         <p><strong>Fiber:</strong> <u>{nutrientdata.fiber_g}g</u></p>
//         <p><strong>Sugars:</strong> <u>{nutrientdata.sugar_g}g</u></p>
//     </ul>
// </figure>
