import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import Blog from "../Blog/Blog";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import CallUs from "../CallUs/CallUs";
import { Helmet } from "react-helmet-async";
import BlogPost from "../BlogPost/BlogPost";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Daily Meal | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BlogPost></BlogPost>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
