import React from "react";
import { useState } from "react";
import { useNavigate, Form, Navigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");

function handleClick() {
    navigate(`/recipe`)
}

  return (
    <div className="home-container">
      <img className="logo" alt="Foodle" src="./Foodle-Logo.png" />
      {/* Form allow you to omit using Navigate through url and automatically sends searchterm into RecipePage */}
      <Form method="get" action="/recipespage">
        <div className="bar">
            <input className="searchbar" type="text" name="search" placeholder="Search"/>
        <button type="submit">Search</button>
        </div>
      </Form>
      <div>
        <button className="lucky-btn" onClick={handleClick} >Feeling Lucky?</button>
      </div>



      {/* <div className="bar">
        <input
          className="searchbar"
          type="text"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          title="Search"
          placeholder="Search"
        />
      </div>
      <div className="filtersearch">
        <div className="homecontrols">
          <button
            id="home-search"
            onClick={() => {
              navigate(`/recipespage?search=${searchTerm}`);
            }}
          >
            {" "}
            Search
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
}
