import React, { useEffect, useState } from "react";
import kfcLogo from "../assets/kfc.png";

function Cards() {
  let [dish, setDish] = useState(["daal"]);

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

  return (
    <div className="card">
      {dish.length > 0 ? (
        dish.map((dishes) => {
          return (
            <div key={dishes.idMeal}>
              <img src={kfcLogo} alt="KFC Logo" />
              <div>{dishes.strArea}</div>
              <div>{dishes.strCategory}</div>
              <button>15$</button>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Cards;
