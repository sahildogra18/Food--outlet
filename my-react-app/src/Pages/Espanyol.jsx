import React from "react";
import { useEffect, useState } from "react";
import kfcLogo from "../assets/kfc.png";
function Espanyol(props) {
  const [dish, setDish] = useState([]);

  const englisho = async () => {
    let response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    let data = await response.json();
    console.log(data.meals[0].strArea);
    setDish(data.meals);
  };

  useEffect(() => {
    englisho();
  }, []);

  const spanishDishes = dish.filter((dishes) => dishes.strArea === "Spanish");

  return (
    <>
      <div className="card">
        {spanishDishes.length > 0 ? (
          spanishDishes.map((dishes) => (
            <div key={dishes.idMeal}>
              <img src={kfcLogo} alt="KFC Logo" />
              <div>{dishes.strArea}</div>
              <div>{dishes.strCategory}</div>
              <button>100$</button>
              <button onClick={englisho}>Fetch New Dish</button>
            </div>
          ))
        ) : (
          <>
            <p>No Spanish dishes found or loading...</p>
            <button onClick={englisho}>Fetch New Dish</button>
          </>
        )}
      </div>
    </>
  );
}

export default Espanyol;
