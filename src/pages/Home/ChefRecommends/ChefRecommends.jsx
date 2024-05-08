import React from "react";
import ChickenNuggets from "../../../assets/home/Chicken Nuggets.jpg";
import IceCreamCone from "../../../assets/home/Ice Cream Cone.jpg";
import CrispyChickenSandwich from "../../../assets/home/Crispy Chicken Sandwich.jpg";

const ChefRecommends = () => {
  return (
    <section className="md:flex flex-row gap-2">
      <div className="card md:w-96 sm:w-auto glass mb-5">
          <img src={ChickenNuggets} className='h-[200px]' alt="Chicken Nuggets" />
        <div className="card-body items-center">
          <h2 className="card-title">Chicken Nuggets</h2>
          <p>
            Bite-sized pieces of boneless, skinless chicken that are breaded or
            battered and deep-fried. They are a popular menu item for kids and
            adults alike, often served with dipping sauces like ketchup,
            barbecue sauce, or honey mustard.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 uppercase border-b-4">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card md:w-96 sm:w-auto glass mb-5">
          <img src={IceCreamCone} className='h-[200px]' alt="Ice Cream Cone" />
        <div className="card-body items-center ">
          <h2 className="card-title">Ice Cream Cone</h2>
          <p>
            A classic dessert option at fast food restaurants, it features a
            scoop or two of ice cream in a sugar or waffle cone. Flavors can
            range from vanilla and chocolate to more adventurous options like
            mint chocolate chip or cookie dough.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-active border-0 border-b-4">
            Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card md:w-96 sm:w-auto glass mb-5">
          <img src={CrispyChickenSandwich} className='h-[200px]' alt="Crispy Chicken Sandwich" />
        <div className="card-body items-center">
          <h2 className="card-title">Crispy Chicken Sandwich</h2>
          <p>
            A sandwich featuring a crispy chicken breast patty, usually breaded
            or battered and deep-fried, on a toasted bun. Variations can include
            different sauces, toppings like lettuce, tomato, and mayonnaise, or
            spicy options. pen_spark
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline  border-0 border-b-4">
            Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
