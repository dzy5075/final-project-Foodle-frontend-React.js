import { useEffect, useState } from "react";
import React from "react";

export default function NeedsCalc() {
  const [gender, setGender] = useState("All");
  const [inches, setInches] = useState(null);
  const [kg, setKg] = useState(null);
  const [age, setAge] = useState(null);
  const [af, setAf] = useState(null);
  const [energy, setEnergy] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fluid, setFluid] = useState(0);

  const onChange = (e) => {
    setInches(e.target.value);
  };
  const onChange2 = (e) => {
    setKg(e.target.value);
  };
  const onChange3 = (e) => {
    setAge(e.target.value);
  };
  const onChange4 = (e) => {
    setAf(e.target.value);
  };

  function calculateEN(gender, kg, inches, age, af) {
    let RMR;
    if (gender === "Male") {
      RMR = 10 * kg + 6.25 * inches * 2.54 - 5 * age + 5;
    } else if (gender === "Female") {
      RMR = 10 * kg + 6.25 * inches * 2.54 - 5 * age - 161;
    } else {
      return setEnergy(0);
    }
    const energyNeeds = RMR * af;
    console.log(energyNeeds);
    setEnergy(energyNeeds);
  }

  function calculatePRO(kg) {
    let proteinNeedsMin = kg * 0.8;
    setProtein(proteinNeedsMin);
  }

  function calculateFluids(kg) {
    let fluidNeedsMin = kg * 30;

    if (fluidNeedsMin < 1500) {
      fluidNeedsMin = 1500;
    }
    setFluid(fluidNeedsMin);
  }

  useEffect(() => {
    calculatePRO(kg);
    calculateEN(gender, kg, inches, age, af);
    calculateFluids(kg);
  }, [gender, kg, inches, age, af]);

  return (
    <>
      <div className="calculate-form">
        <div>
          <strong>Gender</strong>
        </div>
        <select
          name="Gender-select"
          onChange={(e) => {
            setGender(e.target.value);
          }}
          placeholder="select gender"
        >
          <option value="All">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div>
          <strong>Height in Centimeters, 1feet = 12inches: </strong>
          <input value={inches} onChange={onChange} placeholder="inches" />
        </div>
        <div>
          <strong>Weight in Kilograms(kg), 1kg = 2.2lbs: </strong>
          <input value={kg} onChange={onChange2} placeholder="kg" />
        </div>
        <div>
          <strong> Age: </strong>
          <input value={age} onChange={onChange3} placeholder="years" />
        </div>
        <div>
          <strong>Activity Factor: </strong>
          <select
            name="Af-select"
            onChange={(e) => {
              setAf(e.target.value);
            }}
            placeholder="select Activity Factor"
          >
            <option value="All">Select Activity Factor</option>
            <option value="1.2">1.2: Sedentary(little to no exercise)</option>
            <option value="1.3">1.3: Light Exercise (1-3 times a week)</option>
            <option value="1.5">
              1.5: Moderate Exercise (4-5 times a week)
            </option>
            <option value="1.7">1.7: Heavy Exercise (6-7 times a week)</option>
          </select>{" "}
        </div>
      </div>
      <div className="display-needs">
        <h1>
          <strong>
            <u>Display Needs(estimated)</u>
          </strong>
        </h1>
        {console.log(energy)}
        <h2>
          Your energy needs:<u> {energy.toFixed(1)} kcals</u>
        </h2>
        <h2>
          Your protein needs: 
          <u>
             {protein.toFixed(1)} to {(kg * 1.2).toFixed(1)}grams
          </u>
        </h2>
        <h2>
          Your fluid needs:<u>{Math.round(fluid)} milliliters</u>
        </h2>
      </div>
    </>
  );
}
