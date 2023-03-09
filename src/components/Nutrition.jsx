import { useEffect, useState } from "react";
import { useNavigate, Form, Navigate } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function Nutrition() {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  function fetchNutrition(query) {
    // from api-ninja
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
    <div className="nutrition-header">
        <h1>Food Look Up</h1>
        <p>seach ex: (serving size) of (search item)</p>
        <p>Example: (6 oz) of (steak)</p>
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
        <div className="nutrition-container">
          {searchData.map((nutrientdata) => {
            return (
                // <img src="https://s.cdpn.io/3/NutritionFacts.gif" class="image">
                <section className="performance-facts">
                  {console.log(nutrientdata)}
                <header className="performance-facts__header">
                  <h1 className="performance-facts__title">Nutrition Facts</h1>
                  <p className="small-info">Serving Size {Math.round(`${nutrientdata.serving_size_g}`)}g</p>
                </header>
                <table className="performance-facts__table">
                  <tbody className="small-info">
                    <tr>
                      <th colSpan="2">
                        <b>Total Calories: </b>
                        <u>{nutrientdata.calories}kcals</u>
                      </th>
                      <th colSpan="2">
                        <b>{"Total Calories from Fat: " + " "}</b>
                        <u>{Math.round(`${nutrientdata.fat_total_g}` * 9)} kcals </u>
                      </th>
                    </tr>
                    <tr className="thick-row">
                      <td colSpan="3" >
                        <h2> *Daily Value%*</h2>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan="2">
                        <b>Total Fat: </b>
                        <u>{nutrientdata.fat_total_g}</u>g
                      </th>
                      <td>
                        <b>
                        DV* = {Math.round(
                            (`${nutrientdata.fat_total_g}` / 64) * 100
                          )}
                          %
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td className="blank-cell"></td>
                      <th>
                        <strong>Saturated Fat: </strong>
                        <u>{nutrientdata.fat_saturated_g}</u>g
                      </th>
                      <td>
                        <b>
                          DV* = {Math.round(
                            (`${nutrientdata.fat_saturated_g}` / 20) * 100
                          )}
                          %
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan="2">
                        <b><strong>Cholesterol: </strong></b>
                        <u>{nutrientdata.cholesterol_mg}</u>mg
                      </th>
                      <td>
                        <b>
                          DV* = {Math.round(
                            (`${nutrientdata.cholesterol_mg}` / 300) * 100
                          )}
                          %
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan="2">
                        <b>Sodium: </b>
                        <u>{nutrientdata.sodium_mg}</u>mg
                      </th>
                      <td>
                        <b>
                        DV* = {Math.round(
                            (`${nutrientdata.sodium_mg}` / 2000) * 100
                          )}
                          %
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan="2">
                        <b>Total Carb: </b>
                        <u>{Math.round(`${nutrientdata.carbohydrates_total_g}`)}</u>g
                      </th>
                      <td>
                        <b>
                        DV* = {Math.round(
                            (`${nutrientdata.carbohydrates_total_g}` / 300) *
                              100
                          )}
                          %
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td className="blank-cell"></td>
                      <th>
                        <b> Dietary Fiber:</b> 
                        <u>{Math.round(`${nutrientdata.fiber_g}`)}g</u>
                      </th>
                      <td>
                        <b>
                        DV* = {Math.round((`${nutrientdata.fiber_g}` / 25) * 100)}%
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td className="blank-cell"></td>
                      <th><strong>
                        Sugars:  
                        </strong><u>{Math.round((`${nutrientdata.sugar_g}`))}</u>g
                      </th>
                      <td></td>
                    </tr>
                    <tr className="thick-end">
                      <th colSpan="2">
                        <b>Protein: </b>
                        <u>{nutrientdata.protein_g}</u>g
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
