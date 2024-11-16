import React from "react";
import { useEffect, useState } from "react";
import kfcLogo from "../assets/kfc.png";
function English() {
  let [dish, setDish] = useState([]);

  useEffect(() => {
    const hello = async () => {
      let response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      let data = await response.json();
      console.log(data.meals[0].strArea == "English");
      setDish(data.meals);
    };

    hello();
  }, []);

  const englishDishes = dish.filter((dishes) => {
    return dishes.strArea === "British";
  });

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
            </div>
          ))
        ) : (
          <p>No english dishes found or loading...</p>
        )}
      </div>
    </>
  );
}

export default English;
