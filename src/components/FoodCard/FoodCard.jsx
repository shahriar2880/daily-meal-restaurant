import React from "react";

const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="card  bg-base-100 shadow-xl my-2">
      <figure>
        <img src={image} alt="food" />
      </figure>
      <p className="bg-black text-white absolute right-0 px-4 mr-4 mt-4">${price}</p>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
