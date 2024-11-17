import React, { useState, useEffect } from "react";
import kfcLogo from "../assets/kfc.png";

function English() {
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

  const englishDishes = dish.filter((dishes) => dishes.strArea === "British");

  return (
    <>
      <div className="card">
        {englishDishes.length > 0 ? (
          englishDishes.map((dishes) => (
            <div key={dishes.idMeal}>
              <img src={kfcLogo} alt="KFC Logo" />
              <div>{dishes.strArea}</div>
              <div>{dishes.strCategory}</div>
              <button>300$</button>
              <button onClick={englisho}>Fetch New Dish</button>
            </div>
          ))
        ) : (
          <>
            <p>No English dishes found</p>
            <button onClick={englisho}>Fetch New Dish</button>
          </>
        )}
      </div>
    </>
  );
}

export default English;
