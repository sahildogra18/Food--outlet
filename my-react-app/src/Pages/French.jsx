import React from "react";
import { useEffect, useState } from "react";
function French() {
  let [dish, setDish] = useState([]);

  useEffect(() => {
    const hello = async () => {
      let response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      let data = await response.json();
      console.log(data.meals[0].strArea);
      setDish(data.meals);
    };

    hello();
  }, []);

  const frenchDishes = dish.filter((dishes) => dishes.strArea === "French");

  return (
    <>
      <div className="card">
        {frenchDishes.length > 0 ? (
          spanishDishes.map((dishes) => (
            <div key={dishes.idMeal}>
              <img src={kfcLogo} alt="KFC Logo" />
              <div>{dishes.strArea}</div>
              <div>{dishes.strCategory}</div>
              <button>200$</button>
            </div>
          ))
        ) : (
          <p>No french dishes found or loading...</p>
        )}
      </div>
    </>
  );
}

export default French;
