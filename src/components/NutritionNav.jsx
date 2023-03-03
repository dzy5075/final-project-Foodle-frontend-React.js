import { useNavigate } from "react-router-dom";

export default function NutritionNav({loggedInUser}) {
    let navigate = useNavigate();


  return (
    <nav>
      <div className="banner">
        <div className="nav-bar"> 
          <img
            className="nav-logo"
            onClick={() => {
              navigate("/");
            }}
            src="/Foodtrition-Logo.png"
            alt="Foodtrition Logo"
            href="/"
          />
          
        </div>
      </div>
    </nav>
  )
}
