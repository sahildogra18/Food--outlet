import React from "react";
import { useEffect, useState } from "react";
import kfcLogo from "../assets/kfc.png";
function French() {
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
  const frenchDishes = dish.filter((dishes) => dishes.strArea === "French");

  return (
    <>
      <div className="card">
        {frenchDishes.length > 0 ? (
          frenchDishes.map((dishes) => (
            <div key={dishes.idMeal}>
              <img src={kfcLogo} alt="KFC Logo" />
              <div>{dishes.strArea}</div>
              <div>{dishes.strCategory}</div>
              <button>200$</button>
              <button onClick={englisho}>Fetch New Dish</button>
            </div>
          ))
        ) : (
          <>
            <p>No French dishes found</p>
            <button onClick={englisho}>Fetch New Dish</button>
          </>
        )}
      </div>
    </>
  );
}

export default French;
