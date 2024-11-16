import React from "react";
import { useEffect, useState } from "react";
import kfcLogo from "../assets/kfc.png";
function Espanyol() {
  let [dish, setDish] = useState([]);

  useEffect(() => {
    const hello = async () => {
      let response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      let data = await response.json();
      console.log(data.meals);
      setDish(data.meals);
    };

    hello();
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
            </div>
          ))
        ) : (
          <p>No Spanish dishes found or loading...</p>
        )}
      </div>
    </>
  );
}

export default Espanyol;
